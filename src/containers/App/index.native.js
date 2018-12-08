import React, { PureComponent } from 'react';
import Router from 'containers/Router/index.native';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import store from 'src/store.native';

export default class App extends PureComponent {
  componentDidMount = () => Font.loadAsync({})

  render = () => <Provider store={store()}><Router /></Provider>
}
