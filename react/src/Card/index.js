import React from 'react';
import PropTypes from 'prop-types';

const cx = require('classnames');

const getClass = block => cx({ card: true, block });

export const Card = ({ children, block }) => (
  <div className={getClass(block)}>
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool,
};

Card.defaultProps = {
  children: null,
  block: false,
};

export default Card;
