const fs = require('fs');
const Promise = require('bluebird');
const pkg = require('./package.json');
const sass = require('node-sass');
const postcss = require('postcss');
const prefixer = require('autoprefixer');
const nano = require('cssnano');

const DIST_DIR = `dist/v-${pkg.version}`;
const indexContent = fs.readFileSync('./_sass/index.sass');

if (!fs.existsSync('dist')){
  fs.mkdirSync('dist');
}

if (!fs.existsSync(DIST_DIR)){
  fs.mkdirSync(DIST_DIR);
}

const getThemeName = (themeFile) => themeFile.replace(/_|\.sass/gi, '');

const getSassFiles = (folder) => new Promise((resolve, reject) => {
  fs.readdir('_sass/' + folder, (err, files) => {
    if (err) {
      return reject(err);
    }

    return resolve(files);
  })
})

const getCompactedContent = (base, files) => files.map((file) => {
  return fs.readFileSync(`./_sass/${base}/${file}`, 'utf-8');
}).join('\n');

const getThemesContent = (themes) => themes.map((theme) => ({
  name: getThemeName(theme),
  content: fs.readFileSync(`./_sass/themes/${theme}`, 'utf-8')
}));

const compileSass = ({ file, content }) => {
  const from = `${DIST_DIR}/${file}.css`;
  const to = `${DIST_DIR}/${file}.out.css`;
  const result = sass.renderSync({
    data: content,
    indentedSyntax: true,
  }).css.toString();

  return postcss([prefixer, nano]).process(result, { from, to }).then((final) => {
    return Promise.resolve(fs.writeFileSync(from, final));
  });
};

getSassFiles('themes')
  .then((themes) => ({
    themes: getThemesContent(themes)
  }))
  .then((config) => {
    return getSassFiles('components').then((components) => ({
      ...config,
      components: getCompactedContent('components', components)
    }));
  })
  .then((config) => {
    return getSassFiles('utils').then((utils) => ({
      ...config,
      utils: getCompactedContent('utils', utils)
    }));
  })
  .then((config) => {
    return getSassFiles('utils').then((utils) => ({
      ...config,
      utils: getCompactedContent('utils', utils)
    }));
  })
  .then((config) => {
    return getSassFiles('layouts').then((layouts) => ({
      ...config,
      layouts: getCompactedContent('layouts', layouts)
    }));
  })
  .then(({ themes, components, utils, layouts }) => {
    const defaultContent = themes.filter(({ name }) => name === 'default')[0].content;
    return Promise.map(themes, (theme) => ({
      file: theme.name,
      content: [
        defaultContent != 'default' ?
          defaultContent + themes.content :
          themes.content,
          utils, indexContent, components, layouts
      ].join('\n')
    }), {concurrency: 10});
  })
  .map((themes) => {
    return compileSass(themes);
  }, {concurrency: 10})
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
