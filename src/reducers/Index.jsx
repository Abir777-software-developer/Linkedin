
import { combineReducers } from 'redux'
import  userReducer  from './userReducer'
import articlereducer from './articlereducer';

const rootReducer=combineReducers({
    userState:userReducer,
    articleState:articlereducer,
});

export default rootReducer;