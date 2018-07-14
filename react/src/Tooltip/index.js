import React from 'react';
import PropTypes from 'prop-types';

const getClass = (side, position) => `text ${side} ${position}`;

const DEFAULT_SIDE = 'bottom';
const DEFAULT_POSITION = 'start';
const SIDES = [DEFAULT_SIDE, 'top', 'left', 'right'];
const POSITIONS = [DEFAULT_POSITION, 'middle', 'end'];

export const Tooltip = ({
  children, text, side, position, width,
}) => (
  <span className="tooltip">
    { children }
    <div className={getClass(side, position)} style={{ width }}>{text}</div>
  </span>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  side: PropTypes.oneOf(SIDES),
  position: PropTypes.oneOf(POSITIONS),
};

Tooltip.defaultProps = {
  side: DEFAULT_SIDE,
  position: DEFAULT_POSITION,
  width: 'auto',
};

export default Tooltip;
