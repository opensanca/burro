import React from 'react';

import { storiesOf } from '@storybook/react';
import { Row, Table, Head, Body } from './';

storiesOf('Table', module)
  .add('base usage', () => (
    <Table>
      <Head>
        <th> Column 1 </th>
        <th> Column 2 </th>
        <th> Column 3 </th>
      </Head>
      <Body>
        <Row>
          <td>1</td>
          <td>This is a default row</td>
          <td>one more!</td>
        </Row>
        <Row isActive>
          <td>2</td>
          <td>This is a with isActive</td>
          <td>one more!</td>
        </Row>
        <Row isHover>
          <td>3</td>
          <td>This is a with isHover</td>
          <td>one more!</td>
        </Row>
        <Row isDisabled>
          <td>3</td>
          <td>This is a with isDisabled</td>
          <td>one more!</td>
        </Row>
      </Body>
    </Table>
  ));
