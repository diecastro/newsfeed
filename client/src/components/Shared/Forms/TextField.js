import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';

export default class renderTextField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {input, label, helperText, meta: {touched, error}, ...custom} = this.props;
    let errorText = touched && error ? error : null;
    return (
      <TextField
        error={Boolean(touched && error)}
        fullWidth
        helperText={errorText ? errorText : helperText}
        id={input.name}
        label={label}
        value={input.value ? input.value : ''}
        {...input}
        {...custom}
      />
    );
  }
}
