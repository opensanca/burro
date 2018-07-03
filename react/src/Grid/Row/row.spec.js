import React from 'react';
import { shallow } from 'enzyme';
import { Row } from './';

describe('Row Component', () => {
  const text = 'alo';

  it('should render with defaults', () => {
    const wrapper = shallow(<Row>{text}</Row>);

    expect(wrapper).toHaveHTML(`<div class='row'>${text}</div>`);
  });
});
