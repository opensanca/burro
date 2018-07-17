import React from 'react';
import { shallow } from 'enzyme';
import { Column } from './';

describe('Column Component', () => {
  const text = 'alo';

  it('should render only with hidden', () => {
    const size = 'hidden';
    const wrapper = shallow(<Column md={size}>{text}</Column>);

    expect(wrapper).toHaveHTML(`<div class='col col-md-hidden col-align-flex-start col-justify-flex-start'>${text}</div>`);
  });

  it('should render only with LG size', () => {
    const size = 5;
    const wrapper = shallow(<Column lg={size}>{text}</Column>);

    expect(wrapper).toHaveHTML(`<div class='col col-lg-${size} col-align-flex-start col-justify-flex-start'>${text}</div>`);
  });

  it('should render only with MD size', () => {
    const size = 5;
    const wrapper = shallow(<Column md={size}>{text}</Column>);

    expect(wrapper).toHaveHTML(`<div class='col col-md-${size} col-align-flex-start col-justify-flex-start'>${text}</div>`);
  });

  it('should render only with XS size', () => {
    const size = 5;
    const wrapper = shallow(<Column xs={size}>{text}</Column>);

    expect(wrapper).toHaveHTML(`<div class='col col-xs-${size} col-align-flex-start col-justify-flex-start'>${text}</div>`);
  });

  it('should render only with SM size', () => {
    const size = 5;
    const wrapper = shallow(<Column sm={size}>{text}</Column>);

    expect(wrapper).toHaveHTML(`<div class='col col-sm-${size} col-align-flex-start col-justify-flex-start'>${text}</div>`);
  });

  it('should render with MD and LG sizes', () => {
    const size = 5;
    const size2 = 6;
    const wrapper = shallow(<Column lg={size2} md={size}>{text}</Column>);

    expect(wrapper).toHaveHTML(`<div class='col col-lg-${size2} col-md-${size} col-align-flex-start col-justify-flex-start'>${text}</div>`);
  });
});
