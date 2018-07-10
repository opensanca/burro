import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const messageType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string), PropTypes.bool,
]);

const normalize = (messages) => {
  if (typeof messages === 'string') {
    return [messages];
  } else if (Array.isArray(messages)) {
    return messages;
  }
  return [];
};

const getClassName = (error, warning, success, label) => classnames({
  'input-group': true,
  'has-label': label !== '',
  error,
  warning: !error && warning,
  success: !error && !warning && success,
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
  error, warning, success, label, id, ...otherProps
}) => (
  <div className={getClassName(error, warning, success, label)}>
    <input className="input" id={id} {...otherProps} />
    { renderLabel(label, id) }
    <ul className="message">
      {getMessages(error, warning, success).map((m, index) => (
        <li key={index}>{m}</li>
      ))}
    </ul>
  </div>
);

Input.propTypes = {
  error: messageType,
  warning: messageType,
  success: messageType,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

Input.defaultProps = {
  error: false,
  warning: false,
  success: false,
  label: '',
};

export default Input;
