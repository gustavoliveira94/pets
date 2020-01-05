import { combineReducers } from 'redux';
import { userReducer } from './user';
import { petsReducer } from './pets';

const reducers = combineReducers({
    user: userReducer,
    pets: petsReducer,
});

export default reducers;
