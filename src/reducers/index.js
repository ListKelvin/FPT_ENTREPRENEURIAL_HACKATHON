import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
import chatReducer from './ChatUserReducer';
import postReducer from './PostReducer';

export const reducers = combineReducers({ authReducer, postReducer, chatReducer });
