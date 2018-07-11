import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const getClass = open => classnames({
  dropdown: true,
  active: open,
});

const findText = (options, index) => options.filter(opt => opt.value === index)[0].text;

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
      >
        {option.text}
      </li>
    ));
  }

  render() {
    return (
      <div className={getClass(this.state.open)}>
        <span role="presentation" className="text" onKeyPress={() => this.toggleOpen()}>
          {this.getText()}
        </span>
        <ul className="options">
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

Dropdown.prototype.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.oneOf([
    PropTypes.string, PropTypes.number,
  ]),
  placeholder: PropTypes.string,
};

Dropdown.prototype.defaultProps = {
  selected: null,
  placeholder: '',
};

export default Dropdown;
