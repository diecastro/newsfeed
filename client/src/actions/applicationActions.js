import actionTypes from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';

export function getNews() {
  const endpoint = '/news/1';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      authenticated: false,
      method: 'GET',
      types: [actionTypes.getNewsRequest, actionTypes.getNewsSuccess, actionTypes.getNewsFailure]
    }
  };
}

export function login(body) {
  const endpoint = 'login';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      authenticated: false,
      method: 'POST',
      types: [actionTypes.loginUserRequest, actionTypes.loginUserSuccess, actionTypes.loginUserFailure],
      body
    }
  };
}

export function cleanReducers() {
  return {
    type: actionTypes.cleanAllReducers
  };
}
