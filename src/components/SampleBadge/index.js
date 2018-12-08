import React, { Component } from 'react';
import { Badge, Text } from 'native-base';
import { PropTypes } from 'prop-types';

export default class SampleBadge extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
  }

  static defaultProps = {
    style: {},
    backgroundColor: 'green',
    textColor: 'white'
  }

  render() {
    return (
      <Badge style={{
        ...this.props.style,
        backgroundColor: this.props.backgroundColor,
        width: 28
      }}>
        <Text style={{color: this.props.textColor}}>{this.props.text}</Text>
      </Badge>
    );
  }
}