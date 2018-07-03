import React from 'react';
import PropTypes from 'prop-types';

export { Column } from './Column';
export { Row } from './Row';

export const Grid = ({ children }) => (
  <div className="container">
    { children }
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
