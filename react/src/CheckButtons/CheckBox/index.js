import React from 'react';
import PropTypes from 'prop-types';

const isCheckedFn = (label, selected) => selected.indexOf(label) > -1;

const getClass = isChecked => `checkbutton checkbox ${isChecked ? 'active' : ''}`;

export const CheckBox = ({
  label,
  selected,
  onChange,
}) => {
  const isChecked = isCheckedFn(label, selected);
  const id = `check-${label}`;

  return (
    <div className={getClass(isChecked)}>
      <label htmlFor={id}>
        <div className="item" />
        <input
          type="checkbox"
          value={label}
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
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
