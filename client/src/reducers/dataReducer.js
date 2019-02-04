import actionTypes from '../constants/actionTypes';

const dataReducer = (
  state = {
    authors: null,
    news: null,
    isFetching: true
  }, action) => {
  switch (action.type) {
    case actionTypes.getAuthorsRequest:
      return {...state, isFetching: true, error: null};
    case actionTypes.getAuthorsSuccess:
      return {...state, isFetching: false, authors: action.response.data};
    case actionTypes.getAuthorsFailure:
      return {...state, isFetching: false, error: action.error};
    case actionTypes.postAuthorRequest:
      return {...state, isFetching: true, error: null};
    case actionTypes.postAuthorSuccess:
      return {...state, isFetching: false};
    case actionTypes.postAuthorFailure:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
};
export default dataReducer;
