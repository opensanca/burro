import React from 'react';

import { storiesOf } from '@storybook/react';
import { Test } from './';

storiesOf('Test', module)
  .add('base usage', () => (
    <Test name="Burro" />
  ));
