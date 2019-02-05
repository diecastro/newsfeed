import React from 'react';
import { Field } from 'redux-form';
import FileInput from './FileInput'

export default props => (
  <Field
    component={FileInput}
    {...props}
  />);
