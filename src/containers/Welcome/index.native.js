import React, { Component } from 'react';
import SignupLogin from 'components/SignupLogin';
import SignupLoginButtons from 'components/SignupLoginButtons/index.native';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from 'src/actions';
import { Facebook, SecureStore } from 'expo';
import { REACT_APP_FACEBOOK_APP_ID } from 'react-native-dotenv';
import PropTypes from 'prop-types';

class Welcome extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  login = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      REACT_APP_FACEBOOK_APP_ID,
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      SecureStore.setItemAsync('FB_ACCESS_TOKEN', token);
      this.props.dispatch(login(token));
    } else {
      console.error('Error signing in with facebook');
    }
  };

  render = () => {
    if (this.props.auth.isAuthenticated) return <Redirect to={'/dashboard'} />;
    return (
      <SignupLogin
        buttonsComponent={<SignupLoginButtons login={this.login} />}
      />
    );
  };
}

function mapStateToProps(state) {
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps)(Welcome);
