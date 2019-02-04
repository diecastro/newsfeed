import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import applicationReducer from './applicationReducer';
import userReducer from './userReducer';
import dataReducer from './dataReducer';

const reducers = {
  application: applicationReducer,
  user: userReducer,
  routing,
  form: formReducer,
  data: dataReducer
};

export default combineReducers(reducers);
