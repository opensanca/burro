import React from 'react';

import { storiesOf } from '@storybook/react';
import { Card } from './';

storiesOf('Card', module)
  .addWithJSX('base usage', () => (
    <div style={{background: '#f1f1f1', padding: '20px'}}>
      <Card>
        Card Example
      </Card>
    </div>
  ), { skip: 1 });
