import { combineReducers } from 'redux';
import { keyBy } from 'lodash-es';
import { connectRouter } from 'connected-react-router';
import { Platform } from 'react-native';

const users = (state = {}, action) => {
  switch (action.type) {
  case 'REQUEST_USERS':
    return state;
  case 'RECEIVE_USERS':
    return keyBy(action.users, 'id');
  case 'RECEIVE_USER':
    return {
      ...state,
      [action.user.id]: action.user
    };
  default:
    return state;
  }
};



const currentUserId = (state = null, action) => {
  switch (action.type) {
  case 'REQUEST_CURRENT_USER':
    return state;
  case 'RECEIVE_CURRENT_USER':
    return action.userId;
  default:
    return state;
  }
};

const auth = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
  case 'AUTH_SUCCESS':
    return { ...state, isAuthenticated: true };
  case 'AUTH_FAIL':
    return { ...state, isAuthenticated: false };
  default:
    return state;
  }
};

export default history => combineReducers({
  users,
  currentUserId,
  auth,
  ...!['ios', 'android'].includes(Platform.OS) ? { router: connectRouter(history) } : {}
});
