import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import { userIsAuthenticated, userIsAdmin, userIsNotAuthenticated } from './auth';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Layout from '../components/Layout/LayoutContainer';
import NewsContainer from '../components/NewsContainer/NewsContainer';

import routes from '../constants/routes';

const appRoutePrefix = routes.home;

export default (
  <Route path={appRoutePrefix}>
    <Route path={appRoutePrefix} component={Layout}>
      <Route path={appRoutePrefix + routes.news} component={NewsContainer}/>
      {/*<Route path={appRoutePrefix + routes.login} component={userIsNotAuthenticated(Login)}/>*/}
      {/*<Route path={appRoutePrefix + routes.admin} component={userIsAuthenticated(userIsAdmin(Admin))}/>*/}
    </Route>
    <Route path={appRoutePrefix + routes.fourZeroFour} component={PageNotFound}/>
    <Redirect from='*' to={appRoutePrefix + routes.fourZeroFour}/>
  </Route>
);
