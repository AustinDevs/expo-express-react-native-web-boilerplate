import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const {
      auth,
      komponent: Komponent,
      ...props
    } = this.props;
    return (
      <Route
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
