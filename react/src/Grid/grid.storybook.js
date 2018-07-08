import React from 'react';

import { storiesOf } from '@storybook/react';
import { Grid, Row, Column } from './';

storiesOf('Grid', module)
  .addWithJSX('base usage', () => (
    <Grid>
      <Row>
        <Column md={2} style={{ background: '#f1f1f1' }}>
          col col-md-2
        </Column>
        <Column md={4} style={{ background: '#f1f1f1' }}>
          col col-md-4
        </Column>
        <Column md={6} style={{ background: '#f1f1f1' }}>
          col col-md-6
        </Column>
      </Row>
    </Grid>
  ));
