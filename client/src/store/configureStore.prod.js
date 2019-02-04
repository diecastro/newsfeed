import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import jwt from '../middleware/jwt';
import api from '../middleware/api';
import applySiteReducer from '../reducers';
import { browserHistory } from 'react-router';

export default function configureStore(preloadedState) {
  const reactRouterMiddleware = routerMiddleware(browserHistory);
  let store = createStore(
    applySiteReducer,
    preloadedState,
    applyMiddleware(jwt, thunk, api, reactRouterMiddleware)
  );

  return store;
}
