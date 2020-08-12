import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import blogsReducer from "../reducers/blogs_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(
    blogsReducer,
    preloadedState,
    //  applyMiddleware(thunk,logger) 
    applyMiddleware(thunk) // Allows us to view state in console
  );

export default configureStore;
