import React from 'react';
import { shallow } from 'enzyme';
import { Row } from './';

describe('Row Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<Row />);

    expect(wrapper).toHaveClassName('row');
  });
});
