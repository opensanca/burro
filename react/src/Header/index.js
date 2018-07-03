import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ children }) => (
  <header className='header'>
    { children }
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
