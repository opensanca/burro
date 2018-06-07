import { configure } from '@storybook/react';

function loadStories() {
  require('./requires');
}

configure(loadStories, module);
