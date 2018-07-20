import React from 'react';
import PropTypes from 'prop-types';

const cx = require('classnames');
const DEFAULT_ALIGMENT = 'flex-start';
const FLEX_ALIGNMENTS = [DEFAULT_ALIGMENT, 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const FLEX_DIRECTIONS = ['row', 'column', 'reverse-column', 'reverse-row'];

const getClass = (direction, alignItems, alignContent, justifyContent, className) => cx({
  'flex': true,
  [className]: true,
  [`direction-${direction}`]: direction,
  [`align-items-${alignItems}`]: true,
  [`align-content-${alignContent}`]: true,
  [`justify-content-${justifyContent}`]: true,
});

export const Flex = ({
  direction,
  alignItems,
  alignContent,
  justifyContent,
  className,
  children,
  ...otherProps
}) => (
  <div {...otherProps}
    className={getClass(direction, alignItems, alignContent, justifyContent, className)}>
    { children }
  </div>
)

Flex.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.oneOf(FLEX_DIRECTIONS),
  alignItems: PropTypes.oneOf(FLEX_ALIGNMENTS),
  alignContent: PropTypes.oneOf(FLEX_ALIGNMENTS),
  justifyContent: PropTypes.oneOf(FLEX_ALIGNMENTS),
};

Flex.defaultProps = {
  className: '',
  children: null,
  direction: null,
  alignItems: DEFAULT_ALIGMENT,
  alignContent: DEFAULT_ALIGMENT,
  justifyContent: DEFAULT_ALIGMENT,
};

export default Flex;
