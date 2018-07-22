import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from './Flex';

export { Column } from './Column';
export { Row } from './Row';

const cx = require('classnames');

const getClass = hero => cx({ container: true, hero });

export const Grid = ({ hero, ...props }) => (
  <Flex className={getClass(hero)} {...props} />
);

Grid.propTypes = {
  hero: PropTypes.bool,
};

Grid.defaultProps = {
  hero: false,
};

export default Grid;
