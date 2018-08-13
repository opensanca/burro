import React from 'react';

import { storiesOf } from '@storybook/react';
import { RadioBox } from './';

const NOP = () => false;
const SELECTED_RADIO = 'foo';

class RadioboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: '' };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    const selected = e.target.value;
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
        <RadioBox selected={selected} value="foo" label="Foo" onChange={this.toggle} />
        <RadioBox selected={selected} value="bar" label="Bar" onChange={this.toggle} />
      </div>
    );
  }
}

storiesOf('RadioBox', module)
  .addWithJSX('base usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <RadioBox selected={SELECTED_RADIO} value={SELECTED_RADIO} label="Foo" onChange={NOP} />
      <RadioBox selected={SELECTED_RADIO} value="bar" label="Bar" onChange={NOP} />
    </div>
  ), { skip: 1 })
  .addWithJSX('container', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <RadioboxContainer />
    </div>
  ), { skip: 1 });
