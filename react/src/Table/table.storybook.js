import React from 'react';

import { storiesOf } from '@storybook/react';
import { Row, Table, Head, Body, Column } from './';

storiesOf('Table', module)
  .add('base usage', () => (
    <Table>
      <Head>
        <Column header> Column 1 </Column>
        <Column header> Column 2 </Column>
        <Column header> Column 3 </Column>
      </Head>
      <Body>
        <Row>
          <Column>1</Column>
          <Column>This is a default row</Column>
          <Column>one more!</Column>
        </Row>
        <Row isActive>
          <Column>2</Column>
          <Column>This is a with isActive</Column>
          <Column>one more!</Column>
        </Row>
        <Row isHover>
          <Column>3</Column>
          <Column>This is a with isHover</Column>
          <Column>one more!</Column>
        </Row>
        <Row isDisabled>
          <Column>3</Column>
          <Column>This is a with isDisabled</Column>
          <Column>one more!</Column>
        </Row>
      </Body>
    </Table>
  ));
