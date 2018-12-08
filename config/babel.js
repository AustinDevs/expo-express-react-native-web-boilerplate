const path = require('path');

module.exports = {
  include: [
    path.resolve('src'),
    path.resolve('.storybook'),
    path.resolve('node_modules/native-base-shoutem-theme'),
    path.resolve('node_modules/react-native-easy-grid'),
    path.resolve('node_modules/react-native-drawer'),
    path.resolve('node_modules/react-native-vector-icons'),
    path.resolve('node_modules/react-native-keyboard-aware-scroll-view'),
    path.resolve('node_modules/react-native-calendars'),
    path.resolve('node_modules/react-native-gifted-chat'),
    path.resolve('node_modules/react-native-parsed-text'),
    path.resolve('node_modules/react-native-lightbox'),
    path.resolve('node_modules/@expo/react-native-action-sheet'),
    path.resolve('node_modules/native-base/node_modules/react-native-vector-icons')
  ],
  plugins: [
    'react-native-web',
    '@babel/plugin-syntax-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { 'loose': false }]
  ],
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions']
        },
        modules: 'commonjs'
      }
    ],
    '@babel/preset-flow',
    '@babel/preset-react'
  ]
};