import React from 'react';
import { shallow } from 'enzyme';
import { Row } from './';

describe('Row Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(
      <Row>
        <td>test</td>
      </Row>
    );

    expect(wrapper).toHaveHTML('<tr class="row"><td>test</td></tr>');
  });

  it('should render with active class', () => {
    const wrapper = shallow(
      <Row isActive>
        <td>test</td>
      </Row>
    );

    expect(wrapper).toHaveHTML('<tr class="row active"><td>test</td></tr>');
  });

  it('should render with hover class', () => {
    const wrapper = shallow(
      <Row isHover>
        <td>test</td>
      </Row>
    );

    expect(wrapper).toHaveHTML('<tr class="row hover"><td>test</td></tr>');
  });
});
