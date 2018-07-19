import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './';

describe('Card Component', () => {
  const text = 'alo';

  it('should render with defaults', () => {
    const wrapper = shallow(<Card>{text}</Card>);

    expect(wrapper).toHaveHTML(`<div class='card'>${text}</div>`);
  });
});
