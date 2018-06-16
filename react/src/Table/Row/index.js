import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const getClass = (isActive, isHover, isDisabled) => classnames({
  row: true,
  active: isActive,
  hover: isHover,
  disabled: isDisabled,
});

export const Row = ({
  children, isActive, isHover, isDisabled, ...props
}) => (
  <tr className={getClass(isActive, isHover, isDisabled)} {...props}>
    { children }
  </tr>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isHover: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Row.defaultProps = {
  isActive: false,
  isHover: false,
  isDisabled: false,
};

export default Row;
