import React from 'react';
import PropTypes from 'prop-types';

export const Test = ({ name }) => (
  <div>
    { name }
  </div>
);

Test.prototype.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Test;
