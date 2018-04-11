import {combineReducers} from 'redux';
import UserReducer from '../Reducers/userData';
import ActiveReducer from '../Reducers/reducerUser';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser:ActiveReducer
});

export default allReducers;