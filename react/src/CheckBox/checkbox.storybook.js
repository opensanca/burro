import React from 'react';

import { storiesOf } from '@storybook/react';
import { CheckBox } from './';

const NOP = () => false;
const SELECTED = ['one'];

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: [] };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    let selected;
    const val = e.target.value;
    const index = this.state.selected.indexOf(val);

    if (index > -1) {
      selected = this.state.selected.filter((_, i) => i !== index);
    } else {
      selected = this.state.selected.concat([val]);
    }

    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
        <CheckBox selected={selected} value="one" label="One" onChange={this.toggle} />
        <CheckBox selected={selected} value="two" label="Two" onChange={this.toggle} />
      </div>
    );
  }
}

storiesOf('CheckBox', module)
  .addWithJSX('base usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <CheckBox selected={SELECTED} value={SELECTED[0]} label="One" onChange={NOP} />
      <CheckBox selected={SELECTED} value="two" label="Two" onChange={NOP} />
    </div>
  ), { skip: 1 })
  .addWithJSX('container', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <CheckboxContainer />
    </div>
  ), { skip: 1 });
