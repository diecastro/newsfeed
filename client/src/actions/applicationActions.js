import actionTypes from '../constants/actionTypes';
import { CALL_API } from '../middleware/api';

export function executeFinalizeApplicationTaskRequest() {

  let key = localStorage.getItem('applicationId') || null;

  let endpoint = `application/${key}/finalize`;

  return {
    [CALL_API]: {
      endpoint: endpoint,
      method: 'GET',
      authenticated: true,
      encrypted: false,
      types: [actionTypes.executeFinalizeApplicationTaskRequest, actionTypes.executeFinalizeApplicationTaskSuccess, actionTypes.executeFinalizeApplicationTaskFailure]
    }
  };
}

export function cleanReducers() {
  return {
    type: actionTypes.cleanAllReducers
  };
}