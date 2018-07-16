import React from 'react';
import PropTypes from 'prop-types';
const classnames = require('classnames');

const getClass = (isActive, isHover, isDisabled) => classnames({
  trow: true,
  active: isActive,
  hover: isHover,
  disabled: isDisabled,
});

export const TRow = ({
  children, isActive, isHover, isDisabled, ...props
}) => (
  <tr className={getClass(isActive, isHover, isDisabled)} {...props}>
    { children }
  </tr>
);

TRow.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isHover: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

TRow.defaultProps = {
  isActive: false,
  isHover: false,
  isDisabled: false,
};

export default TRow;
