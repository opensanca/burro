import React, { Component } from 'react';
import PropTypes from 'prop-types';

const classnames = require('classnames');

const getClass = open => classnames({
  dropdown: true,
  active: open,
});

const findText = (options, index) => options.filter(opt => opt.value === index)[0].text;

const numberOrString = PropTypes.oneOfType([
  PropTypes.string, PropTypes.number,
]);

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClickWrapper(value) {
    this.props.onClick(value);
  }

  getText() {
    const { options, selected, placeholder } = this.props;

    if (selected) {
      return findText(options, selected);
    }

    return (<span className="placeholder"> {placeholder} </span>);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  renderItems() {
    return this.props.options.map(option => (
      <li
        role="menuitem"
        key={option.value}
        className="option"
        onKeyPress={this.onClickWrapper(option.value)}
        onClick={this.onClickWrapper(option.value)}
      >
        {option.text}
      </li>
    ));
  }

  render() {
    return (
      <div className={getClass(this.state.open)}>
        <span
          role="presentation"
          className="text"
          onClick={() => this.toggleOpen()}
          onKeyPress={() => this.toggleOpen()}
        >
          {this.getText()}
        </span>
        <ul className="options">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: numberOrString.isRequired,
    text: numberOrString.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: numberOrString,
  placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
  selected: null,
  placeholder: '',
};

export default Dropdown;
