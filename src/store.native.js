import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default initialState => createStore(
  rootReducer(), initialState, composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);
