import React from 'react';
import { shallow } from 'enzyme';
import { RadioBox } from './';

const NOP = () => false;

describe('RadioBox Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<RadioBox selected="" value="foo" label="Foo" onChange={NOP} />);

    expect(wrapper.find('.checkbutton')).toExist();
    expect(wrapper.find('.checkbutton.active')).not.toExist();
  });

  it('should active for selected', () => {
    const selected = 'foo';
    const wrapper = shallow(<RadioBox selected={selected} value={selected} label="Foo" onChange={NOP} />);

    expect(wrapper.find('.checkbutton')).toExist();
    expect(wrapper.find('.checkbutton.active')).toExist();
  });
});
