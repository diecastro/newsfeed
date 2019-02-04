import React, { Component } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styles from '../../../styles/Forms.scss';
import TextField from '../../Shared/Forms/TextField';
import Button from '../../Shared/Button/Button';
import Validator from '../../../util/Validator';

const validate = values => Validator.validateAddAuthorForm(values);

class AuthorForm extends Component {
  render() {
    const {handleSubmit, isFetching, submitError} = this.props;
    return (
      <Dialog open={this.props.isVisible} maxWidth={'md'} fullWidth>
        <DialogTitle>
          <Typography component={'p'}>Add Author</Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className={`col-md-12 ${styles.spacing}`}>
                <Field
                  label='Name'
                  component={TextField}
                  name='name'
                />
              </div>
            </div>
            <div className='row'>
              <div className={`col-md-12 ${styles.spacing}`}>
                <Field
                  label='Email'
                  component={TextField}
                  name='email'
                />
              </div>
            </div>
            <div className='row'>
              <div className={`col-md-12 ${styles.spacing}`}>
                <Field
                  label='Twitter User'
                  component={TextField}
                  name='twitter'
                />
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button disabled={isFetching} label={'Add Author'} arrow={false} onClick={handleSubmit}/>
          <Button label={'Close Dialog'} onClick={this.props.closeDialog} arrow={false}/>
        </DialogActions>
        {submitError &&
        <p style={{color: 'red', textAlign:'center'}}>{submitError}</p>}
      </Dialog>
    );
  }
}

AuthorForm = reduxForm({
  form: 'addAuthorForm',
  validate,
  fields: [
    'name',
    'email',
    'twitter'
  ],
  enableReinitialize: true
})(AuthorForm);

function mapStateToProps(state, ownProps) {
  return {};
}

AuthorForm = connect(mapStateToProps, null, null, {withRef: true})(AuthorForm);
export default AuthorForm;
