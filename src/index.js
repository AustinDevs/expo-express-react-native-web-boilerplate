import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/index.web.js';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));
unregister();
// if (process.env.NODE_ENV === 'production') registerServiceWorker();
