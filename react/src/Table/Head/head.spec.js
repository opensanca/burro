import React from 'react';
import { shallow } from 'enzyme';
import { Head } from './';

describe('Head Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Head><th>test</th></Head>);

    expect(wrapper).toHaveHTML('<thead><tr><th>test</th></tr></thead>');
  });
});
