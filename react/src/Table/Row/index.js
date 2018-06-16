import React from 'react';
import classnames from 'classnames';

const getClass = (isActive, isHover) => classnames({
  'row': true,
  'active': isActive,
  'hover': isHover
});

export const Row = ({ children, isActive, isHover }) => (
  <tr className={getClass(isActive, isHover)}>
    { children }
  </tr>
)

export default Row;
