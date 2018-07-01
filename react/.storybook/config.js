import '../../dist/v-0.0.1/default.css';
import { configure } from '@storybook/react';

const req = require.context('../', true, /\.storybook\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
