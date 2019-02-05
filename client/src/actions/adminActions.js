import { CALL_API } from '../middleware/api';
import actionTypes from '../constants/actionTypes';

export function getAuthors() {
  const endpoint = '/authors';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      authenticated: false,
      method: 'GET',
      types: [actionTypes.getAuthorsRequest, actionTypes.getAuthorsSuccess, actionTypes.getAuthorsFailure]
    }
  };
}

export function addAuthor(body) {
  const endpoint = '/author';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      authenticated: true,
      method: 'POST',
      types: [actionTypes.postAuthorRequest, actionTypes.postAuthorSuccess, actionTypes.postAuthorFailure],
      body
    }
  };
}

export function deleteNews(body) {
  const endpoint = '/news';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      authenticated: true,
      method: 'DELETE',
      types: [actionTypes.deleteNewsRequest, actionTypes.deleteNewsSuccess, actionTypes.deleteNewsFailure],
      body
    }
  };
}

export function selectNewsId(id) {
  return {
    type: actionTypes.selectNews,
    value: id
  };
}

export function clearSelectedNews() {
  return {
    type: actionTypes.clearSelectNews
  };
}

export function addNews(body) {
  const endpoint = '/news';
  return {
    [CALL_API]: {
      endpoint: endpoint,
      authenticated: true,
      method: 'POST',
      types: [actionTypes.addNewsRequest, actionTypes.addNewsSuccess, actionTypes.addNewsFailure],
      body
    }
  };
}
