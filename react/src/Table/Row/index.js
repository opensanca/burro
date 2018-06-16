import React from 'react';
import classnames from 'classnames';

const getClass = (isActive, isHover, isDisabled) => classnames({
  'row': true,
  'active': isActive,
  'hover': isHover,
  'disabled': isDisabled
});

export const Row = ({ children, isActive, isHover, isDisabled, ...props }) => (
  <tr className={getClass(isActive, isHover, isDisabled)} {...props}>
    { children }
  </tr>
)

export default Row;