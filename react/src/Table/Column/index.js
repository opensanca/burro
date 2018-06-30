import React from 'react';
import PropTypes from 'prop-types';

export const Column = ({ header, children }) => header ? (
  <th>{ children }</th>
) : (
  <td>{ children }</td>
);

Column.propTypes = {
  header: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  header: false
};

export default Column;
