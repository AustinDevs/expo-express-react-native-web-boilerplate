import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto_medium';
    src: local('Roboto_medium'), url(${require('native-base/Fonts/Roboto_medium.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${require('native-base/Fonts/Roboto.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Entypo';
    src: url(${require('react-native-vector-icons/Fonts/Entypo.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'EvilIcons';
    src: url(${require('react-native-vector-icons/Fonts/EvilIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'fontcustom';
    src: url(${require('react-native-vector-icons/Fonts/Foundation.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Ionicons';
    src: url(${require('react-native-vector-icons/Fonts/Ionicons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Material Design Icons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Octicons';
    src: url(${require('react-native-vector-icons/Fonts/Octicons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'simple-line-icons';
    src: url(${require('react-native-vector-icons/Fonts/SimpleLineIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Zocial';
    src: url(${require('react-native-vector-icons/Fonts/Zocial.ttf')}) format('truetype');
  }

  textarea, select, input, button { outline: none; }
`;
