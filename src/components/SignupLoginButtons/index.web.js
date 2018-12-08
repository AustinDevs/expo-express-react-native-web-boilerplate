import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import styles from './styles';
import { PropTypes } from 'prop-types';

export default class SignupLoginButtons extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  render = () =>
    <View>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad
        fields="name,email,picture"
        callback={this.props.login}
        render={renderProps => (
          <TouchableOpacity style={styles.button} onPress={renderProps.onClick}>
            <Text style={styles.signup}>SIGN UP</Text>
          </TouchableOpacity>
        )}
      />
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad
        fields="name,email,picture"
        callback={this.props.login}
        render={renderProps => (
          <TouchableOpacity onPress={renderProps.onClick}>
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>
        )}
      />
    </View>
}
