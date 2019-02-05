import React from 'react';
import { Route, Redirect } from 'react-router';
import { userIsAuthenticated } from './auth';
import adminContainer from '../components/AdminConsole';
import Layout from '../components/Layout/LayoutContainer';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import NewsContainer from '../components/NewsContainer/NewsContainer';
import SignInContainer from '../components/Auth/SignInContainer';
import AuthorPage from '../components/AdminConsole/Authors/AuthorPage';
import NewsPage from '../components/AdminConsole/News/NewsPage';
import routes from '../constants/routes';

const appRoutePrefix = routes.home;

export default (
  <Route path={appRoutePrefix}>
    <Route path={appRoutePrefix} component={Layout}>
      <Route path={appRoutePrefix + routes.news} component={NewsContainer}/>
      <Route path={appRoutePrefix + routes.login} component={SignInContainer}/>
      <Route path={appRoutePrefix + routes.admin} component={userIsAuthenticated(adminContainer)}/>
      <Route path={appRoutePrefix + routes.authors} component={userIsAuthenticated(AuthorPage)}/>
      <Route path={appRoutePrefix + routes.newsAdmin} component={userIsAuthenticated(NewsPage)}/>
    </Route>
    <Route path={appRoutePrefix + routes.fourZeroFour} component={PageNotFound}/>
    <Redirect from='*' to={appRoutePrefix + routes.fourZeroFour}/>
  </Route>
);
