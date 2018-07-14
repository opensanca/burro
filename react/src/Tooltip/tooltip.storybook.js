import React from 'react';

import { storiesOf } from '@storybook/react';
import { Tooltip } from './';

storiesOf('Tooltip', module)
  .addWithJSX('base usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Tooltip text="Test tooltip with this text">
        Hover to Tooltip It!
      </Tooltip>
    </div>
  ), { skip: 1 })
  .addWithJSX('width side/position props', () => (
    <div style={{ margin: '20px' }}>
      <Tooltip position="middle" text="Test tooltip with this text">
        Hover to Tooltip On Bottom Middle!
      </Tooltip>
      <Tooltip position="end" text="Test tooltip with this text">
        Hover to Tooltip On Bottom End!
      </Tooltip>
    </div>
  ), { skip: 1 })
  .addWithJSX('width side top', () => (
    <div style={{ margin: '250px 20px 20px' }}>
      <Tooltip side="top" text="Test tooltip with this text">
        Hover to Tooltip On top Start!
      </Tooltip>
      <Tooltip side="top" position="middle" text="Test tooltip with this text">
        Hover to Tooltip On top Middle!
      </Tooltip>
      <Tooltip side="top" position="end" text="Test tooltip with this text">
        Hover to Tooltip On top End!
      </Tooltip>
    </div>
  ), { skip: 1 })
  .addWithJSX('width side right', () => (
    <div style={{ margin: '20px 20px 20px' }}>
      <Tooltip side="right" width="100px" text="Test tooltip with this text">
        Hover to Tooltip On Right Start!
      </Tooltip>
      <Tooltip side="right" position="middle" width="100px" text="Test tooltip with this text">
        Hover to Tooltip On Right Middle!
      </Tooltip>
      <Tooltip side="right" position="end" width="100px" text="Test tooltip with this text">
        Hover to Tooltip On Right End!
      </Tooltip>
    </div>
  ), { skip: 1 })
  .addWithJSX('width side left', () => (
    <div style={{ margin: '20px 150px 20px' }}>
      <Tooltip side="left" width="100px" text="Test tooltip with this text">
        Hover to Tooltip On Left Start!
      </Tooltip>
      <Tooltip side="left" position="middle" width="100px" text="Test tooltip with this text">
        Hover to Tooltip On Left Middle!
      </Tooltip>
      <Tooltip side="left" position="end" width="100px" text="Test tooltip with this text">
        Hover to Tooltip On Left End!
      </Tooltip>
    </div>
  ), { skip: 1 });
