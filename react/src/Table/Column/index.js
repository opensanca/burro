import React from 'react';
import PropTypes from 'prop-types';

export const TColumn = ({ header, children }) => (header ? (
  <th>{ children }</th>
) : (
  <td>{ children }</td>
));

TColumn.propTypes = {
  header: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TColumn.defaultProps = {
  header: false,
};

export default TColumn;
