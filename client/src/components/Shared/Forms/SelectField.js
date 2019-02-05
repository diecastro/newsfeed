import React, { Fragment } from 'react';
import { Select } from 'redux-form-material-ui';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Field } from 'redux-form';
import InputLabel from '@material-ui/core/InputLabel';

const renderSelect = ({meta: {touched, error}, id, disabled, disableUnderline, label, ...children}) => {
  return (
    <Fragment>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Field
        autoWidth
        component={Select}
        disabled={disabled}
        disableUnderline={disableUnderline}
        error={Boolean(error && touched)}
        id={id}
        name={id}
        {...children}
      />
      {(touched && error) &&
      <FormHelperText
        error
        htmlFor={id}
      >{error}</FormHelperText>}
    </Fragment>
  );
};

export default renderSelect;
