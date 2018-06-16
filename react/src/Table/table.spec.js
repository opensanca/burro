import React from 'react';
import { shallow } from 'enzyme';
import { Table } from './';

describe('Table Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Table><tr /></Table>);

    expect(wrapper).toHaveHTML('<table class="table"><tr></tr></table>');
  });
});
