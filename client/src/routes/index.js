import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import PageNotFound from '../components/PageNotFound/PageNotFound';
import Layout from '../components/Layout/LayoutContainer';
import SelectExperience from '../components/SelectExperience/SelectExperienceContainer';
import {UserAuthWrapper} from 'redux-auth-wrapper';
import {routerActions} from 'react-router-redux';

import routes from '../constants/routes';

const appRoutePrefix = routes.home;

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default (
  <Route path={appRoutePrefix}>
    <IndexRoute component={SelectExperience} />
    {/*<Route path={appRoutePrefix} component={Layout}>*/}
      {/*<Route path={appRoutePrefix + routes.equipment} component={EquipmentContainer} />*/}
      {/*<Route path={appRoutePrefix + routes.plan} component={PlanContainer} />*/}
      {/*<Route path={appRoutePrefix + routes.shoppingBag} component={ShoppingBagContainer} />*/}
      {/*<Route path={appRoutePrefix + routes.clientSignUp} component={ClientSignUpContainer} />*/}
      {/*<Route path={appRoutePrefix + routes.terms} component={TermsContainer} />*/}
      {/*<Route path={appRoutePrefix + routes.businessSignUp} component={BusinessSignUpContainer} />*/}
      {/*<Route path={appRoutePrefix + routes.thankYou} component={ThankYou} />*/}
      {/*<Route path={`${appRoutePrefix + routes.productDetail}/:productId`} component={ProductDetailContainer}/>*/}
      {/*<Route path={appRoutePrefix + routes.payment} component={PaymentContainer}/>*/}
    {/*</Route>*/}
    <Route path={appRoutePrefix + routes.fourZeroFour} component={PageNotFound}/>
    <Redirect from='*' to={appRoutePrefix + routes.fourZeroFour} />
  </Route>
);
