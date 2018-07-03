import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const INVALID_COL = 'auto';
const COLUMN_NUM = ['hidden', INVALID_COL, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const isValidColNumber = colN => colN !== INVALID_COL;

const getCol = (lg, md, sm, xs, className) => classnames({
  col: true,
  [`col-lg-${lg}`]: isValidColNumber(lg),
  [`col-md-${md}`]: isValidColNumber(md),
  [`col-sm-${sm}`]: isValidColNumber(sm),
  [`col-xs-${xs}`]: isValidColNumber(xs),
  className,
});

export const Column = ({
  children, className, lg, md, sm, xs, ...otherProps
}) => (
  <div className={getCol(lg, md, sm, xs, className)} {...otherProps}>
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
};

Column.defaultProps = {
  className: '',
  lg: INVALID_COL,
  md: INVALID_COL,
  sm: INVALID_COL,
  xs: INVALID_COL,
};

export default Column;
