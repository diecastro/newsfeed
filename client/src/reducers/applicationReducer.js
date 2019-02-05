import actionTypes from '../constants/actionTypes';
import CommonUtil from '../util/CommonUtil';

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
    case actionTypes.selectNews:
      return {...state, selectedNews: CommonUtil.findRecord(state.data.docs, action.value)};
    case actionTypes.clearSelectNews:
      return {...state, selectedNews: null};
    default:
      return state;
  }
};
export default applicationReducer;
