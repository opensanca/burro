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
        <CheckBox selected={selected} label="One" onChange={this.toggle} />
        <CheckBox selected={selected} label="Two" onChange={this.toggle} />
      </div>
    );
  }
}

storiesOf('CheckButton', module)
  .addWithJSX('checkbox base usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <CheckBox selected={SELECTED} label={SELECTED[0]} onChange={NOP} />
      <CheckBox selected={SELECTED} label="two" onChange={NOP} />
    </div>
  ), { skip: 1 })
  .addWithJSX('checkbox container', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <CheckboxContainer />
    </div>
  ), { skip: 1 });
