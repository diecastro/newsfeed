import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import TextField from '../Shared/Forms/TextField';
import styles from '../../styles/Forms.scss';
import Validator from '../../util/Validator';
import Loading from '../Shared/Loading';


/* istanbul ignore next */
const validate = values => Validator.validateSignInFormPopUp(values);

class SignInForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {loginError, handleSubmit, loginFetching} = this.props;
    let loadingIndicator = loginFetching && <Loading fullLoader={false}/>;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {loadingIndicator}
          <div className='row'>
            <h1 className={` col-md-12 ${styles.header}`}>{'Sign in.'}</h1>
          </div>
          <div className='row'>
            <div className={`col-md-12 ${styles.spacing}`}>
              <Field
                label='Email'
                component={TextField}
                name='email_address'
              />
            </div>
          </div>
          <div className='row'>
            <div className={`col-md-12 ${styles.spacing}`}>
              <Field
                label='Password'
                component={TextField}
                name='password'
                type='password'
              />
            </div>
          </div>
          {loginError &&
          <p className='loginErrorMessage' style={{color: 'red'}}>{loginError}</p>}
        </form>
      </div>
    );
  }
}

SignInForm = reduxForm({
  form: 'SignInForm',
  validate,
  fields: [
    'email_address',
    'password'
  ],
  enableReinitialize: true
})(SignInForm);

function mapStateToProps(state, ownProps) {
  return {};
}

SignInForm = connect(mapStateToProps, null, null, {withRef: true})(SignInForm);
export default SignInForm;
