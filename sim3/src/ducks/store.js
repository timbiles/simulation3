import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';
import postReducer from './postReducer';

const combinedReducers = combineReducers({
  reducer,
  postReducer
});

const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(combinedReducers, middleware);

export default store;
