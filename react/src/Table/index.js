import React from 'react';
import PropTypes from 'prop-types';

export { Row } from './Row';
export { Head } from './Head';
export { Body } from './Body';

export const Table = ({ children }) => (
  <table className="table">
    { children }
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
