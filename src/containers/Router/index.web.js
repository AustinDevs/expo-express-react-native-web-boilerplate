import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import Dashboard from 'containers/Dashboard';
import Welcome from 'containers/Welcome/index.web';

class Router extends Component {
  constructor(props) {
    super(props);
    this.initialRoute = window.location.pathname;
    this.initialRoute = this.initialRoute === '/' ? '/dashboard' : this.initialRoute;
  }

  render = () => {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Welcome initialRoute={this.initialRoute} {...props} />
            )}
          />
          <PrivateRoute exact path="/dashboard" komponent={Dashboard} />
        </Switch>
      </ConnectedRouter>
    );
  };
}

export default connect()(Router);
