import React from 'react';
import { mount, shallow } from 'enzyme';
import { Dropdown } from './';

const TEST_ID = '1';
const TEST_TEXT = 'Option 1';
const OPTIONS = [
  { value: TEST_ID, text: TEST_TEXT },
  { value: '2', text: 'Option 2' },
];

describe('Dropdown Component', () => {
  let onClickStub;

  const testBase = (event) => {
    const wrapper = mount(<Dropdown options={OPTIONS} onClick={onClickStub} />);
    const opts = wrapper.find('.options .option');

    expect(wrapper.find('.dropdown')).toExist();
    expect(wrapper.find('.dropdown.active')).not.toExist();


    OPTIONS.forEach((value, index) => {
      expect(opts.at(index)).toHaveText(value.text);
    });

    wrapper.find('span.text').simulate(event);
    expect(wrapper.find('.dropdown.active')).toExist();
    return wrapper;
  };

  beforeEach(() => {
    onClickStub = jest.fn();
  });

  it('should render with defaults', () => {
    testBase('click');
  });

  it('should render with defaults and keyPress', () => {
    testBase('keyPress');
  });

  it('should exec click on li', () => {
    const wrapper = testBase('click');
    wrapper.find('li').first().simulate('click');
    wrapper.find('li').first().simulate('keyPress');
  });

  it('should render with select option', () => {
    const wrapper =
      shallow(<Dropdown selected={TEST_ID} options={OPTIONS} onClick={onClickStub} />);

    expect(wrapper.find('.placeholder')).not.toExist();
    expect(wrapper.find('span.text')).toHaveText(TEST_TEXT);
  });
});
