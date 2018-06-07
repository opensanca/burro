import React from 'react';

import { Test } from './';
import { storiesOf } from '@storybook/react';

storiesOf('Test', module)
  .add('base usage', () => (
    <Test name='Burro' />
  ));
