import React, { PureComponent } from 'react';
import { KeepAwake, registerRootComponent } from 'expo';
import App from './containers/App/index.native';
import StoryBookUI from '../storybook';
import { STORYBOOK } from 'react-native-dotenv';
import { NativeModules } from 'react-native';

if (process.env.NODE_ENV === 'development') {
  KeepAwake.activate();
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

const RootComponent = STORYBOOK ? StoryBookUI : App;

registerRootComponent(RootComponent);

export default class Root extends PureComponent {
  render = () => <RootComponent />
}
