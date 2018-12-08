import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: 'localhost', // YOUR IP
  onDeviceUI: true,
  resetStorybook: true
});

class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;