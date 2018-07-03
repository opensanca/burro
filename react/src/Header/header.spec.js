import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './';

describe('Header Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Header><div>test</div></Header>);

    expect(wrapper).toHaveHTML('<header class="header"><div>test</div></header>');
  });
});
