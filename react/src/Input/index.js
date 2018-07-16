import React from 'react';
import PropTypes from 'prop-types';

const classnames = require('classnames');

const messageType = PropTypes.oneOfType([
  PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.bool,
]);

const normalize = (messages) => {
  if (typeof messages === 'string') {
    return [messages];
  } else if (Array.isArray(messages)) {
    return messages;
  }
  return [];
};

const getClassName = (error, warning, success, label, ghost) => classnames({
  'input-group': true,
  'has-label': label !== '',
  warning: !error && warning,
  success: !error && !warning && success,
  ghost,
  error,
});

const getMessages = (error, warning, success) => {
  if (error) {
    return normalize(error);
  } else if (warning) {
    return normalize(warning);
  }
  return normalize(success);
};

const renderLabel = (label, id) => {
  if (!label) {
    return null;
  }

  return (
    <label className="label" htmlFor={id} >{label}</label>
  );
};

export const Input = ({
  error, warning, success, ghost, label, id, ...otherProps
}) => (
  <div className={getClassName(error, warning, success, label, ghost)}>
    <input className="input" id={id} {...otherProps} />
    { renderLabel(label, id) }
    <ul className="message">
      {getMessages(error, warning, success).map(m => (
        <li key={m.replace(/ /g, '').toLowerCase()}>{m}</li>
      ))}
    </ul>
  </div>
);

Input.propTypes = {
  error: messageType,
  warning: messageType,
  success: messageType,
  label: PropTypes.string,
  ghost: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

Input.defaultProps = {
  error: false,
  warning: false,
  success: false,
  ghost: false,
  label: '',
};

export default Input;
