import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

export default class SignupLoginButtons extends PureComponent {
  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  render = () => (
    <View>
      <TouchableOpacity style={styles.button} onPress={this.props.login}>
        <Text style={styles.signup}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.props.login}>
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}
