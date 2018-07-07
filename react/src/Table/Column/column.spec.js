import React from 'react';
import { shallow } from 'enzyme';
import { TColumn } from './';

describe('TColumn Component', () => {
  it('should render with defaults', () => {
    const text = 'alo';
    const wrapper = shallow(<TColumn>{text}</TColumn>);

    expect(wrapper).toHaveHTML(`<td>${text}</td>`);
  });

  it('should render with header props', () => {
    const text = 'alo';
    const wrapper = shallow(<TColumn header>{text}</TColumn>);

    expect(wrapper).toHaveHTML(`<th>${text}</th>`);
  });
});
