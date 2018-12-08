import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from 'src/store.web';
import Router from 'containers/Router/index.web';
import { createBrowserHistory } from 'history';
import 'src/fonts.js';

const history = createBrowserHistory();

export default class App extends PureComponent {
  render = () =>
    <Provider store={store(history)}><Router history={history}/></Provider>
}