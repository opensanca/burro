import React from 'react';
import PropTypes from 'prop-types';

const isCheckedFn = (label, selected) => selected.indexOf(label) > -1;

const getClass = isChecked => `checkbutton checkbox ${isChecked ? 'active' : ''}`;

export const CheckBox = ({
  label,
  value,
  selected,
  onChange,
}) => {
  const isChecked = isCheckedFn(value, selected);
  const id = `check-${value}`;

  return (
    <div className={getClass(isChecked)}>
      <label htmlFor={id}>
        <div className="item" />
        <input
          type="checkbox"
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

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
