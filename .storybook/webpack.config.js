const { include, presets, plugins } = require('../config/babel');
const { alias } = require('../config/webpack');

module.exports = (config, env) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(js|jsx|mjs)$/,
        include,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          babelrc: false,
          plugins,
          presets
        }
      },
      {
        test: /\.(png|jpg|gif|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    alias
  },
  node: {
    fs: 'empty'
  }
});