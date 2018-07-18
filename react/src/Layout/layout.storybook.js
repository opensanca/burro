import React from 'react';

import { storiesOf } from '@storybook/react';
import { HeaderLayout } from './';
import { Input } from '../Input';

const LOGO = 'https://i.imgur.com/4tsbdjB.png';
const BUTTONS = [
  { children: (<i>+</i>) },
  { children: (<i>-</i>) },
];

storiesOf('Layouts', module)
  .addWithJSX('Header Layout', () => (
    <HeaderLayout logo={LOGO} buttons={BUTTONS}>
      <Input placeholder="Search something..." id="test" ghost />
    </HeaderLayout>
  ));
