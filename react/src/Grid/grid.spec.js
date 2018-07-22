import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from './';

describe('Grid Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Grid />);

    expect(wrapper).toHaveClassName('container');
  });
});
