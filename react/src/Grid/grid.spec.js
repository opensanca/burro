import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from './';

describe('Grid Component', () => {
  const text = 'alo';

  it('should render with defaults', () => {
    const wrapper = shallow(<Grid>{text}</Grid>);

    expect(wrapper).toHaveHTML(`<div class='container'>${text}</div>`);
  });
});
