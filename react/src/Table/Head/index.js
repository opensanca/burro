import React from 'react';
import PropTypes from 'prop-types';

export const Head = ({ children }) => (
  <thead>
    <tr>{ children }</tr>
  </thead>
);

Head.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Head;
