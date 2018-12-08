import { API_SERVER } from 'react-native-dotenv';
import { isEmpty } from 'lodash-es';
import { push } from 'connected-react-router';
import { Platform } from 'react-native';
import { omit } from 'lodash-es';
const apiServer = API_SERVER || '';

const fetchOptions = {
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

const requestUsers = () => ({ type: 'REQUEST_USERS' });
const receiveUsers = users => ({ type: 'RECEIVE_USERS', users });
const requestCurrentUser = () => ({ type: 'REQUEST_CURRENT_USER' });
const receiveCurrentUser = userId => ({ type: 'RECEIVE_CURRENT_USER', userId });
const authSuccess = () => ({ type: 'AUTH_SUCCESS' });
const authFail = () => ({ type: 'AUTH_FAIL' });

export const receiveUser = user => ({ type: 'RECEIVE_USER', user });

export const login = accessToken => dispatch => {
  fetchOptions.headers.Authorization = `Bearer ${accessToken}`;
  fetch(`${apiServer}/auth/facebook`, { ...fetchOptions, method: 'GET' })
    .then(() => dispatch(fetchCurrentUser()))
    .catch(error => console.error(error));
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(requestUsers());
    return fetch(`${apiServer}/api/users`, fetchOptions)
      .then(response => response.json())
      .then(users => dispatch(receiveUsers(users)))
      .catch(error => {
        console.error(error);
        dispatch(receiveUsers([]));
      });
  };
};

const fetchCurrentUserFail = dispatch => {
  dispatch(authFail());
  dispatch(receiveUsers([]));
  dispatch(receiveCurrentUser(null));
};

export const fetchCurrentUser = () => {
  return dispatch => {
    dispatch(requestCurrentUser());
    return fetch(`${apiServer}/api/users/current`, fetchOptions)
      .then(response => response.json())
      .then(user => {
        if (!isEmpty(user)) {
          dispatch(receiveUsers([user]));
          dispatch(receiveCurrentUser(user.id));
          dispatch(authSuccess());
        } else fetchCurrentUserFail(dispatch);
      })
      .catch(error => {
        console.error(error);
        fetchCurrentUserFail(dispatch);
      });
  };
};

export const updateCurrentUser = params => {
  return dispatch => {
    return fetch(`${apiServer}/api/users/current`, {
      ...fetchOptions,
      method: 'PATCH',
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(currentUser => dispatch(receiveUser(currentUser)))
      .catch(error => console.error(error));
  };
};

export const historyPush = (path, history) => {
  return dispatch => {
    switch (Platform.OS) {
    case 'ios':
      history.push(path);
      break;
    case 'android':
      history.push(path);
      break;
    default:
      dispatch(push(path));
      break;
    }
  };
};
