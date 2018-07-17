import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './';

describe('Input Component', () => {
  const fakeMessage = 'fakeMessage';

  const checkMessage = (wrapper, kind, message) => {
    expect(wrapper).toHaveClassName(kind);
    expect(wrapper.find('ul > li')).toHaveText(message);
  };

  it('should render with defaults', () => {
    const wrapper = shallow(<Input id="test" />);

    expect(wrapper)
      .toHaveHTML('<div class="input-group"><input class="input" id="test"/></div>');
  });

  it('should render with warning prop', () => {
    const wrapper = shallow(<Input id="test" warning={[fakeMessage]} />);

    checkMessage(wrapper, 'warning', fakeMessage);
  });

  it('should render with success prop', () => {
    const wrapper = shallow(<Input id="test" success={[fakeMessage]} />);

    checkMessage(wrapper, 'success', fakeMessage);
  });

  it('should render with error prop', () => {
    const wrapper = shallow(<Input id="test" error={[fakeMessage]} />);

    checkMessage(wrapper, 'error', fakeMessage);
  });

  it('should render with error prop as string', () => {
    const wrapper = shallow(<Input id="test" error={fakeMessage} />);

    checkMessage(wrapper, 'error', fakeMessage);
  });

  it('should render with override warning with error prop', () => {
    const wrapper = shallow(<Input id="test" error={[fakeMessage]} warning={[fakeMessage]} />);

    checkMessage(wrapper, 'error', fakeMessage);
  });

  it('should render with label prop', () => {
    const label = 'foo';
    const wrapper = shallow(<Input id="test" label={label} />);
    expect(wrapper).toHaveClassName('input-group');
    expect(wrapper).not.toHaveClassName('error');
    expect(wrapper).not.toHaveClassName('warning');
    expect(wrapper).not.toHaveClassName('success');
    expect(wrapper.find('label')).toHaveText(label);
  });
});
