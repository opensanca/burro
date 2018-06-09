import React from 'react';
import { shallow } from 'enzyme';
import { Test } from './';

describe('Test Component', () => {
  it('should render correctly', () => {
    const name = 'burro';
    const wrapper = shallow(<Test name={name} />);

    expect(wrapper).toHaveHTML(`<div class="test">${name}</div>`);
  });
});
