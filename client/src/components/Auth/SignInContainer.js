import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SignInForm from './SignInForm';
import styles from '../../styles/Forms.scss';
import Button from '../Shared/Button/Button';
import routes from '../../constants/routes';
import actionTypes from '../../constants/actionTypes';

export class SignInContainer extends Component {

  constructor(props) {
    super(props);
    this.submitCredentials = this.submitCredentials.bind(this);
    this.onSubmitCredentialsClick = this.onSubmitCredentialsClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isAuthenticated && nextProps.user.isLogged) {
      this.props.router.push(routes.admin);
    }
  }

  submitCredentials() {
    this.props.login({
      email: this.props.signInForm.values.email_address,
      password: this.props.signInForm.values.password
    }).then(result => {
      result.type === actionTypes.loginUserSuccess ? localStorage.setItem('news-feed-token', JSON.stringify(result.response)) : null;
    });
  }

  onSubmitCredentialsClick() {
    this.refs.signInForm.getWrappedInstance().submit();
  }

  render() {

    const {loginFetching} = this.props;
    return (
      <div>
        <SignInForm
          ref='signInForm'
          onSubmit={this.submitCredentials}
          {...this.props}
        />
        <div className={`pull-right ${styles.proceedAction}`}>
          <Button disabled={loginFetching} label={'Login'} onClick={this.onSubmitCredentialsClick} primary/>
        </div>
      </div>);
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.user.error,
    loginFetching: state.user.isRequesting,
    signInForm: state.form.SignInForm
  };
};
export default connect(mapStateToProps, {})(withRouter(SignInContainer));
