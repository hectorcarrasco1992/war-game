
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

import  authReducer from './authReducer';


const reducer = combineReducers({ authReducer });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer,middleware);

export default store;
