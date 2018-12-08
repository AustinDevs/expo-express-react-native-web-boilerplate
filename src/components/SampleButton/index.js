import React, { Component } from 'react';
import { Button } from 'react-native';
import { PropTypes } from 'prop-types';

export default class SampleButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    accessibilityLabel: PropTypes.string
  }

  static defaultProps = {
    color: '#841584',
    accessibilityLabel: 'random buttom'
  }

  render = () => {
    return (
      <Button
        onPress={this.props.onPress}
        title={this.props.title}
        color={this.props.color}
        accessibilityLabel={this.props.accessibilityLabel}
      />
    );
  }
}