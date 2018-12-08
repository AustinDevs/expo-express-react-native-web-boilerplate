import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SignupLogin from '.';
import SignupLoginButtons from 'components/SignupLoginButtons/index.native';

storiesOf('SignupLogin', module)
  .add('SignUp/Login Buttons', () => (
    <SignupLogin buttonsComponent={<SignupLoginButtons login={() => {}}/>}/>
  ));
