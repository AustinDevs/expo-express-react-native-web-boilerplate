import React, { PureComponent } from 'react';
import SignupLogin from 'components/SignupLogin';
import SignupLoginButtons from 'components/SignupLoginButtons/index.web';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from 'src/actions';
import PropTypes from 'prop-types';

class Welcome extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    initialRoute: PropTypes.string
  }

  login = response => this.props.dispatch(login(response.accessToken));

  render() {
    if (this.props.auth.isAuthenticated)
      return <Redirect to={this.props.initialRoute} />;
    return (
      <SignupLogin
        buttonsComponent={<SignupLoginButtons login={this.login} />}
      />
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps)(Welcome);
