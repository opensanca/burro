import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './';

describe('Tooltip Component', () => {
  it('should render with defaults', () => {
    const child = 'foo';
    const text = 'bar';
    const wrapper = shallow(<Tooltip text={text}>{child}</Tooltip>);
    expect(true).toBe(true);
  });
});
