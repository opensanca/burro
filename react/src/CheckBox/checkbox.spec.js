import React from 'react';
import { shallow } from 'enzyme';
import { CheckBox } from './';

const NOP = () => false;

describe('Dropdown Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<CheckBox selected={[]} label="foo" onChange={NOP} />);

    expect(wrapper.find('.checkbutton')).toExist();
    expect(wrapper.find('.checkbutton.active')).not.toExist();
  });

  it('should active for selected', () => {
    const selected = ['foo'];
    const label = selected[0];
    const wrapper = shallow(<CheckBox selected={selected} label={label} onChange={NOP} />);

    expect(wrapper.find('.checkbutton')).toExist();
    expect(wrapper.find('.checkbutton.active')).toExist();
  });
});
