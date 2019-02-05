import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

export default class ButtonIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.clickHandler(this.state.value);
  }

  render() {
    return (
      <IconButton onClick={this.onClick}>
        {this.props.children}
      </IconButton>
    );
  }
}

ButtonIcon.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
