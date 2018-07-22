import React from 'react';
import { shallow } from 'enzyme';
import { Column } from './';

describe('Column Component', () => {
  const expectCol = (wrapper, pre, size) => {
    expect(wrapper).toHaveClassName(`col-${pre}-${size}`);
  };

  it('should render only with hidden', () => {
    const size = 'hidden';
    const wrapper = shallow(<Column md={size} />);

    expectCol(wrapper, 'md', size);
  });

  it('should render only with LG size', () => {
    const size = 5;
    const wrapper = shallow(<Column lg={size} />);

    expectCol(wrapper, 'lg', size);
  });

  it('should render only with MD size', () => {
    const size = 5;
    const wrapper = shallow(<Column md={size} />);

    expectCol(wrapper, 'md', size);
  });

  it('should render only with XS size', () => {
    const size = 5;
    const wrapper = shallow(<Column xs={size} />);

    expectCol(wrapper, 'xs', size);
  });

  it('should render only with SM size', () => {
    const size = 5;
    const wrapper = shallow(<Column sm={size} />);

    expectCol(wrapper, 'sm', size);
  });

  it('should render with MD and LG sizes', () => {
    const size = 5;
    const size2 = 6;
    const wrapper = shallow(<Column lg={size} md={size2} />);

    expectCol(wrapper, 'lg', size);
    expectCol(wrapper, 'md', size2);
  });
});
