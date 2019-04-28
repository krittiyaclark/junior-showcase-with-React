// Combined the authReducer & projecrReducer files together
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;