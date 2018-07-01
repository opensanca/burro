import React from 'react';
import PropTypes from 'prop-types';

export const Row = ({ children, ...otherProps }) => (
  <div className='row' {...otherProps}>
    { children }
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
