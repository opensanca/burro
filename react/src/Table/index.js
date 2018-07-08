import React from 'react';
import PropTypes from 'prop-types';

export { TRow } from './Row';
export { Head } from './Head';
export { Body } from './Body';
export { TColumn } from './Column';

export const Table = ({ children }) => (
  <table className="table">
    { children }
  </table>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
