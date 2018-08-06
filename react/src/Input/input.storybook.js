import React from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from './';

class TestInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (<Input id="test" value={this.state.value} onChange={e => this.onChange(e.target.value)} />);
  }
}

storiesOf('Input', module)
  .addWithJSX('base usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Input />
    </div>
  ), { skip: 1 })
  .addWithJSX('label prop', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Input label="Example Label" id="test" />
    </div>
  ), { skip: 1 })
  .addWithJSX('error prop', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Input label="Example Label" error={['Test Error Message']} id="test" />
    </div>
  ), { skip: 1 })
  .addWithJSX('warning prop', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Input label="Example Label" warning={['Test Warning Message']} id="test" />
    </div>
  ), { skip: 1 })
  .addWithJSX('success prop', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <Input label="Example Label" success={['Test Success Message']} id="test" />
    </div>
  ), { skip: 1 })
  .addWithJSX('ghost prop', () => (
    <div style={{ background: '#00a8ff', width: '500px', padding: '20px' }}>
      <Input label="Example Label" id="test" ghost />
    </div>
  ), { skip: 1 })
  .addWithJSX('wrapped with status usage', () => (
    <div style={{ width: '500px', margin: '20px' }}>
      <TestInput />
    </div>
  ), { skip: 1 });
