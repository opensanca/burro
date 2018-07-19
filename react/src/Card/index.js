import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children }) => (
  <div className="card">
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
