import React from 'react';

import { storiesOf } from '@storybook/react';
import { Dropdown } from './';

const OPTIONS = [
  { value: 1, text: 'Option 1' },
  { value: 2, text: 'Option 2' },
];

const ON_CLICK = () => false;

storiesOf('Dropdown', module)
  .addWithJSX('base usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Dropdown selected={1} options={OPTIONS} onClick={ON_CLICK} />
    </div>
  ), { skip: 1 })
  .addWithJSX('with placeholder', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Dropdown placeholder="Placeholder here" options={OPTIONS} onClick={ON_CLICK} />
    </div>
  ), { skip: 1 });
