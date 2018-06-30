import React from 'react';
import { shallow } from 'enzyme';
import { Column } from './';

describe('Column Component', () => {
  it('should render with defaults', () => {
    const text = 'alo';
    const wrapper = shallow(<Column>{text}</Column>);

    expect(wrapper).toHaveHTML(`<td>${text}</td>`);
  });

  it('should render with header props', () => {
    const text = 'alo';
    const wrapper = shallow(<Column header>{text}</Column>);

    expect(wrapper).toHaveHTML(`<th>${text}</th>`);
  });
});
