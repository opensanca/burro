import '../../dist/v0.0.1/styles.min.css'
import { configure } from '@storybook/react';

const req = require.context('../', true, /\.storybook\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
