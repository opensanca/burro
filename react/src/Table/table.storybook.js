import React from 'react';

import { storiesOf } from '@storybook/react';
import { TRow, Table, Head, Body, TColumn } from './';

storiesOf('Table', module)
  .addWithJSX('base usage', () => (
    <Table>
      <Head>
        <TColumn header> TColumn 1 </TColumn>
        <TColumn header> TColumn 2 </TColumn>
        <TColumn header> TColumn 3 </TColumn>
      </Head>
      <Body>
        <TRow>
          <TColumn>1</TColumn>
          <TColumn>This is a default row</TColumn>
          <TColumn>one more!</TColumn>
        </TRow>
        <TRow isActive>
          <TColumn>2</TColumn>
          <TColumn>This is a with isActive</TColumn>
          <TColumn>one more!</TColumn>
        </TRow>
        <TRow isHover>
          <TColumn>3</TColumn>
          <TColumn>This is a with isHover</TColumn>
          <TColumn>one more!</TColumn>
        </TRow>
        <TRow isDisabled>
          <TColumn>3</TColumn>
          <TColumn>This is a with isDisabled</TColumn>
          <TColumn>one more!</TColumn>
        </TRow>
      </Body>
    </Table>
  ));
