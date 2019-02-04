import actionTypes from '../constants/actionTypes';

const applicationReducer = (
  state = {
    isFetching: true,
    data: null,
    page: 1
  }, action) => {
  switch (action.type) {
    case actionTypes.getNewsRequest:
      return {...state, isFetching: true};
    case actionTypes.getNewsSuccess:
      return {...state, isFetching: false, data: action.response};
    case actionTypes.getNewsFailure:
      return {...state, isFetching: false};
    default:
      return state;
  }
};
export default applicationReducer;
