import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  routing,
  form: formReducer,
};

export default combineReducers(reducers);
