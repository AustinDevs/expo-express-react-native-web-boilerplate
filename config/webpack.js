const path = require('path');

module.exports = {
  alias: {
    'react-native/Libraries/Renderer/shims/ReactNativePropRegistry':
    'react-native-web/dist/modules/ReactNativePropRegistry',
    'react-native$': 'react-native-web',
    './ActionSheet': './ActionSheet.ios.js',
    AssetRegistry: './AssetRegistry.js',
    AssetSourceResolver: './AssetSourceResolver.js',
    'react-native-datepicker': path.resolve(
      __dirname,
      '../src/components/DatePicker/index.js'
    ),
    src: path.resolve(__dirname, '../src'),
    containers: path.resolve(__dirname, '../src/containers'),
    components: path.resolve(__dirname, '../src/components'),
    images: path.resolve(__dirname, '../src/images'),
    json: path.resolve(__dirname, '../src/json'),
    config: path.resolve(__dirname, '../src/config')
  }
};
