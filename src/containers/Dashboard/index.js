import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    currentUserId: PropTypes.string.isRequired
  }

  render() {
    return (
      <Text>{this.props.users[this.props.currentUserId].firstName}</Text>
    );
  }
}
function mapStateToProps(state) {
  const { users, currentUserId } = state;
  return { users, currentUserId };
}
export default connect(mapStateToProps)(Dashboard);
