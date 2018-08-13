import React from 'react';
import { shallow } from 'enzyme';
import { CheckBox } from './';

const NOP = () => false;

describe('CheckBox Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<CheckBox selected={[]} value="foo" label="Foo" onChange={NOP} />);

    expect(wrapper.find('.checkbutton')).toExist();
    expect(wrapper.find('.checkbutton.active')).not.toExist();
  });

  it('should active for selected', () => {
    const selected = ['foo'];
    const value = selected[0];
    const wrapper = shallow(<CheckBox selected={selected} value={value} label="Foo" onChange={NOP} />);

    expect(wrapper.find('.checkbutton')).toExist();
    expect(wrapper.find('.checkbutton.active')).toExist();
  });
});
