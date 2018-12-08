import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from 'src/store.web';
import SignupLogin from './';
import SignupLoginButtons from 'components/SignupLoginButtons/index.web';
import { createBrowserHistory } from 'history';

storiesOf('SignupLogin', module)
  .add('SignUp/Login Buttons', () => (
    <Provider store={store(createBrowserHistory())}>
      <SignupLogin buttonsComponent={<SignupLoginButtons />} />
    </Provider>
  ));
