import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import applicationReducer from './applicationReducer';

const reducers = {
  application: applicationReducer,
  routing,
  form: formReducer
};

export default combineReducers(reducers);
