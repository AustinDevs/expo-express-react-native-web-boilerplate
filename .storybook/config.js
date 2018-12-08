import 'babel-polyfill';
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport';
import GlobalStyle from 'src/fonts.js';

const GlobalStyleDecorator = (storyFn) => (
  <div>
    <GlobalStyle />
    { storyFn() }
  </div>
)

addDecorator(GlobalStyleDecorator);
addDecorator(withViewport('iphone6'));
const req = require.context('../src', true, /story\.\web\.js$/)
const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
