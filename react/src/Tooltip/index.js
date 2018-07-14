import React from 'react';
import PropTypes from 'prop-types';

const getClass = (side, position) => {
  return `text ${side} ${position}`;
};

const min = (width) => {
  return { minWidth: `${width}px`};
};

const DEFAULT_SIDE = 'bottom';
const DEFAULT_POSITION = 'start';
const SIDES = [DEFAULT_SIDE, 'top', 'left', 'right'];
const POSITIONS = [DEFAULT_POSITION, 'middle', 'end'];

export const Tooltip = ({ children, text, side, position, minWidth }) => (
  <span className='tooltip'>
    { children }
    <div className={getClass(side, position)} style={min(minWidth)}>{text}</div>
  </span>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  minWidth: PropTypes.number,
  side: PropTypes.oneOf(SIDES),
  position: PropTypes.oneOf(POSITIONS)
};

Tooltip.defaultProps = {
  side: DEFAULT_SIDE,
  position: DEFAULT_POSITION,
  minWidth: 0
};

export default Tooltip;
