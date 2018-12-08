import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'src/reducers';

export default (history, initialState) => createStore(
  createRootReducer(history),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, logger, routerMiddleware(history))
  )
);
