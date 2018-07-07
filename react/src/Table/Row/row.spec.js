import React from 'react';
import { shallow } from 'enzyme';
import { TRow } from './';

describe('TRow Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<TRow><td>test</td></TRow>);

    expect(wrapper).toHaveHTML('<tr class="trow"><td>test</td></tr>');
  });

  it('should render with active class', () => {
    const wrapper = shallow(<TRow isActive><td>test</td></TRow>);

    expect(wrapper).toHaveHTML('<tr class="trow active"><td>test</td></tr>');
  });

  it('should render with hover class', () => {
    const wrapper = shallow(<TRow isHover><td>test</td></TRow>);

    expect(wrapper).toHaveHTML('<tr class="trow hover"><td>test</td></tr>');
  });

  it('should render with disabled class', () => {
    const wrapper = shallow(<TRow isDisabled><td>test</td></TRow>);

    expect(wrapper).toHaveHTML('<tr class="trow disabled"><td>test</td></tr>');
  });
});
