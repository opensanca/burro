import React from 'react';
import { shallow } from 'enzyme';
import { Flex } from './';

describe('Flex Component', () => {
  const text = 'text';
  const checkFlexComponent = (wrapper, {
    alignItems = 'flex-start',
    alignContent = 'flex-start',
    justifyContent = 'flex-start',
  }) => {
    expect(wrapper).toHaveText(text);
    expect(wrapper).toHaveClassName('flex');
    expect(wrapper).toHaveClassName(`align-items-${alignItems}`);
    expect(wrapper).toHaveClassName(`align-content-${alignContent}`);
    expect(wrapper).toHaveClassName(`justify-content-${justifyContent}`);
  };

  it('should render with defaults', () => {
    const wrapper = shallow(<Flex>{text}</Flex>);
    checkFlexComponent(wrapper, {});
  });

  it('should render with different alignItems', () => {
    const alignItems = 'flex-end';
    const wrapper = shallow(<Flex alignItems={alignItems}>{text}</Flex>);
    checkFlexComponent(wrapper, { alignItems });
  });

  it('should render with different alignContent', () => {
    const alignContent = 'flex-end';
    const wrapper = shallow(<Flex alignContent={alignContent}>{text}</Flex>);
    checkFlexComponent(wrapper, { alignContent });
  });

  it('should render with different justifyContent', () => {
    const justifyContent = 'flex-end';
    const wrapper = shallow(<Flex justifyContent={justifyContent}>{text}</Flex>);
    checkFlexComponent(wrapper, { justifyContent });
  });
});
