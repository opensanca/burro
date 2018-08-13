import React from 'react';
import PropTypes from 'prop-types';

const getClass = isChecked => `checkbutton radiobox ${isChecked ? 'active' : ''}`;

const anyProp = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

export const RadioBox = ({
  label,
  value,
  selected,
  onChange,
}) => {
  const isChecked = value === selected;
  const id = `radio-${value}`;

  return (
    <div className={getClass(isChecked)}>
      <label htmlFor={id}>
        <div className="item" />
        <input
          type="radio"
          value={value}
          checked={isChecked}
          onChange={onChange}
          id={id}
        />
        <div className="label">{label}</div>
      </label>
    </div>
  );
};

RadioBox.propTypes = {
  label: PropTypes.string.isRequired,
  selected: anyProp.isRequired,
  value: anyProp.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioBox;
