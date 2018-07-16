import React from 'react';
import PropTypes from 'prop-types';

const classnames = require('classnames');
const DEFAULT_KIND = 'primary';
const BTN_KINDS = [DEFAULT_KIND, 'warning', 'success', 'danger', 'ghost'];

const getClassname = (kind, traced, circular, block) => classnames({
  btn: true,
  [`btn-${kind}`]: true,
  'btn-traced': traced,
  'btn-circular': circular,
  'btn-block': block,
});

const getBtnType = isSubmit => (isSubmit ? 'submit' : 'button');

export const Button = ({
  children,
  isSubmit,
  kind,
  traced,
  circular,
  block,
  ...otherProps
}) => (
  <button
    className={getClassname(kind, traced, circular, block)}
    type={getBtnType(isSubmit)}
    {...otherProps}
  >
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmit: PropTypes.bool,
  kind: PropTypes.oneOf(BTN_KINDS),
  traced: PropTypes.bool,
  circular: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  isSubmit: false,
  kind: DEFAULT_KIND,
  traced: false,
  circular: false,
  block: false,
};

export default Button;
