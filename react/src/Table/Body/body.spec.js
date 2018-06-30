import React from 'react';
import { shallow } from 'enzyme';
import { Body } from './';

describe('Body Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Body><tr /></Body>);

    expect(wrapper).toHaveHTML('<tbody><tr></tr></tbody>');
  });
});
