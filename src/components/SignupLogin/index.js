import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  view: {
    height: 'auto',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 55,
    fontSize: 17,
    display: 'flex',
    textAlign: 'center',
  }
});
export default class SignupLogin extends PureComponent {
  static propTypes = {
    buttonsComponent: PropTypes.element.isRequired,
  };
  render() {
    return (
      <View style={styles.view}>
        {this.props.buttonsComponent}
      </View>
    );
  }
}
