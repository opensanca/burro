import React from 'react';

export { Row } from './Row';
export { Head } from './Head';
export { Body } from './Body';

export const Table = ({ children }) => (
  <table class="table">
    { children }
  </table>
);

export default Table;
