import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Column } from '../../Grid';
import { Header } from '../../Header';
import { Button } from '../../Button';

const HeaderButton = ({ children, id, onClick }) => (
  <Button circular traced kind="ghost" key={id} onClick={onClick}>
    { children }
  </Button>
);

export const HeaderLayout = ({ children, logo, buttons }) => (
  <Header>
    <Grid>
      <Row>
        <Column xs={6} md={3}>
          <img className="logo" src={logo} alt="Header Logo" />
        </Column>
        <Column xs="hidden" md={6}> { children } </Column>
        <Column xs={5} md={3} alignItems="center" justifyContent="flex-end">
          { buttons.map(HeaderButton) }
        </Column>
      </Row>
    </Grid>
  </Header>
);

HeaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

HeaderLayout.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape(HeaderButton.propTypes)),
};

HeaderLayout.defaultProps = {
  children: null,
  buttons: [],
};

export default HeaderLayout;
