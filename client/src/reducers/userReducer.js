import actionTypes from '../constants/actionTypes';

const userReducer = (
  state = {
    isRequesting: false,
    isLogged: Boolean(localStorage.getItem('news-feed-token')),
    data: localStorage.getItem('news-feed-token') ? JSON.parse(localStorage.getItem('news-feed-token')).user : null,
    error: null
  }, action) => {
  switch (action.type) {
    case actionTypes.loginUserRequest:
      return {...state, isRequesting: true, error: null};
    case actionTypes.loginUserSuccess:
      return {...state, isRequesting: false, isLogged: true, token: action.response.token, data: action.response.user};
    case actionTypes.loginUserFailure:
      return {...state, isRequesting: false, isLogged: false, error: action.error};
    case actionTypes.logoutUser: {
      return {...state, isLogged: false, data: null};
    }
    default:
      return state;
  }
};
export default userReducer;
