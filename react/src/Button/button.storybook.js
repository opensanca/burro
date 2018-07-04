import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './';

storiesOf('Button', module)
  .add('base colors', () => (
    <div>
      <div style={{ padding: '10px' }}>
        <Button kind="primary"> Primary </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="warning"> Warning </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="danger"> Danger </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="success" block> Success </Button>
      </div>
      <div style={{ background: '#00a8ff', padding: '10px' }}>
        <Button kind="ghost" block> Ghost </Button>
      </div>
    </div>
  ))
  .add('traced colors', () => (
    <div>
      <div style={{ padding: '10px' }}>
        <Button kind="primary" traced> Primary </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="warning" traced> Warning </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="danger" traced> Danger </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="success" traced> Success </Button>
      </div>
      <div style={{ background: '#00a8ff', padding: '10px' }}>
        <Button kind="ghost" traced> Ghost </Button>
      </div>
    </div>
  ))
  .add('circular buttons', () => (
    <div>
      <div style={{ padding: '10px' }}>
        <Button kind="primary" circular> P </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="warning" circular> W </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="danger" circular> D </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="success" circular> S </Button>
      </div>
      <div style={{ background: '#00a8ff', padding: '10px' }}>
        <Button kind="ghost" circular> G </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="primary" circular traced> P </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="warning" circular traced> W </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="danger" circular traced> D </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button kind="success" circular traced> S </Button>
      </div>
      <div style={{ background: '#00a8ff', padding: '10px' }}>
        <Button kind="ghost" circular traced> G </Button>
      </div>
    </div>
  ));
