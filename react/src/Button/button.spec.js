import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './';

describe('Button Component', () => {
  const text = 'alo';
  const kind = 'primary';

  it('should render with defaults', () => {
    const wrapper = shallow(<Button kind={kind}>{text}</Button>);

    expect(wrapper).toHaveHTML(`<button class='btn btn-${kind}' type='button'>${text}</button>`);
  });

  it('should render with isSubmit', () => {
    const wrapper = shallow(<Button kind={kind} isSubmit>{text}</Button>);

    expect(wrapper).toHaveHTML(`<button class='btn btn-${kind}' type='submit'>${text}</button>`);
  });

  it('should render with circular', () => {
    const wrapper = shallow(<Button kind={kind} circular>{text}</Button>);

    expect(wrapper).toHaveHTML(`<button class='btn btn-${kind} btn-circular' type='button'>${text}</button>`);
  });

  it('should render with traced', () => {
    const wrapper = shallow(<Button kind={kind} traced>{text}</Button>);

    expect(wrapper).toHaveHTML(`<button class='btn btn-${kind} btn-traced' type='button'>${text}</button>`);
  });

  it('should render with block', () => {
    const wrapper = shallow(<Button kind={kind} block>{text}</Button>);

    expect(wrapper).toHaveHTML(`<button class='btn btn-${kind} btn-block' type='button'>${text}</button>`);
  });
});
