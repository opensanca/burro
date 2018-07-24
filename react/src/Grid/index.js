import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from './Flex';

export { Column } from './Column';
export { Row } from './Row';

const cx = require('classnames');

const getClass = (hero, className) => cx({
  container: true,
  [className]: className !== '',
  hero,
});

export const Grid = ({ hero, className, ...props }) => (
  <Flex className={getClass(hero, className)} {...props} />
);

Grid.propTypes = {
  hero: PropTypes.bool,
  className: PropTypes.string,
};

Grid.defaultProps = {
  hero: false,
  className: '',
};

export default Grid;
