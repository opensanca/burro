const { readdir, writeFileSync } = require('fs');
const cwd = process.cwd();

const dir = (file) => new Promise((resolve, reject) => {
  readdir(file, (err, files) => {
    if (err) {
      return reject(err);
    };

    return resolve(files)
  });
});

const flattenDeep = (arr) => {
  if (arr.length === 1 && !Array.isArray(arr[0])) {
    return arr;
  } else if (Array.isArray(arr[0])) {
    return flattenDeep(arr[0])
  }

  return arr.reduce((acc, val = []) => {
    if (val && !Array.isArray(val)) {
      val = [val];
    }

    if (Array.isArray(acc)) {
      acc = flattenDeep(acc);
    }

    return val.concat(acc);
  });
}

const recursiveDir = (file) => new Promise((resolve, reject) => {
  return dir(file).then((files) => {
    const promises = files.filter((f) => {
      return ~f.indexOf('.storybook.js') || !~f.indexOf('.');
    }).map((f) => {
      const response = `${file}/${f}`;
      if (~f.indexOf('.')) {
        return Promise.resolve(response);
      }

      return recursiveDir(response);
    });

    return Promise.all(promises);
  }).then((files) => {
    const requires = flattenDeep(files).map((file) => {
      return `require('${file}')`;
    }).reduce((a, c) => {
      return `${a}\n${c};`;
    });

    writeFileSync(`${cwd}/.storybook/requires.js`, requires);
  });
});

recursiveDir(`${cwd}/src`);
