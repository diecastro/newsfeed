import locationHelperBuilder from 'redux-auth-wrapper/history3/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';
import { routerActions } from 'react-router-redux';

import Loading from '../components/Shared/Loading';

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.user.data !== null,
  authenticatingSelector: state => state.user.isRequesting,
  AuthenticatingComponent: Loading,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const userIsAdmin = connectedRouterRedirect({
  redirectPath: '/admin',
  allowRedirectBack: false,
  authenticatedSelector: state => state.user.data !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAdmin'
});

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/admin',
  allowRedirectBack: false,
  authenticatedSelector: state => state.user.data !== null,
  wrapperDisplayName: 'UserIsNotAuthenticated'
});
