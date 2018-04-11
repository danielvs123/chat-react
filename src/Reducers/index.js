import {combineReducers} from 'redux';
import UserReducer from '../Reducers/userData';
import ActiveUserReducer from '../Reducers/reducerUser';
import ActivePageReducer from '../Reducers/reducerPage';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser:ActiveUserReducer,
    activePage:ActivePageReducer
});

export default allReducers;