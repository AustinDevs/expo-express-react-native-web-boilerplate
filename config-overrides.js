const {
  override,
  addWebpackAlias,
  addBabelPlugins,
  babelInclude,
  addBabelPresets
} = require('customize-cra');
const { include, presets, plugins } = require('./config/babel');
const { alias } = require('./config/webpack');

module.exports = override(
  addWebpackAlias(alias),
  ...addBabelPlugins(...plugins),
  ...addBabelPresets(...presets),
  babelInclude(include)
);
