import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/Index';
import {thunk} from 'redux-thunk';
const store=createStore(rootReducer,applyMiddleware(thunk))

export default store;

//using redux tookit below
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducers/Index';
// import {thunk} from 'redux-thunk';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;
