import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-native';
import { Card } from 'react-router-navigation';

class PrivateRoute extends Component {
  render() {
    const {
      auth,
      komponent: Komponent,
      ...props
    } = this.props;
    return (
      <Card
        {...props}
        render={props =>
          auth.isAuthenticated
            ? <Komponent {...props} />
            : <Redirect to={{ pathname: '/', props: { initialRoute: this.initialRoute } }}/>
        }
      />
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps)(PrivateRoute);
