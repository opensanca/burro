import React from 'react';
import PropTypes from 'prop-types';

const classnames = require('classnames');

const INVALID_COL = 'auto';
const DEFAULT_ALIGMENT = 'flex-start';
const COLUMN_NUM = ['hidden', INVALID_COL, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const FLEX_ALIGNMENTS = [DEFAULT_ALIGMENT, 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const isValidColNumber = colN => colN !== INVALID_COL;

const getCol = (lg, md, sm, xs, align, justify, className) => classnames({
  col: true,
  [`col-lg-${lg}`]: isValidColNumber(lg),
  [`col-md-${md}`]: isValidColNumber(md),
  [`col-sm-${sm}`]: isValidColNumber(sm),
  [`col-xs-${xs}`]: isValidColNumber(xs),
  [`col-align-${align}`]: align,
  [`col-justify-${justify}`]: justify,
  className,
});

export const Column = ({
  children, className, lg, md, sm, xs, align, justify, ...otherProps
}) => (
  <div className={getCol(lg, md, sm, xs, align, justify, className)} {...otherProps}>
    { children }
  </div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lg: PropTypes.oneOf(COLUMN_NUM),
  md: PropTypes.oneOf(COLUMN_NUM),
  sm: PropTypes.oneOf(COLUMN_NUM),
  xs: PropTypes.oneOf(COLUMN_NUM),
  align: PropTypes.oneOf(FLEX_ALIGNMENTS),
  justify: PropTypes.oneOf(FLEX_ALIGNMENTS),
};

Column.defaultProps = {
  className: '',
  lg: INVALID_COL,
  md: INVALID_COL,
  sm: INVALID_COL,
  xs: INVALID_COL,
  align: DEFAULT_ALIGMENT,
  justify: DEFAULT_ALIGMENT,
};

export default Column;
