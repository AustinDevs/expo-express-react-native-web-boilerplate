import React, { PureComponent } from 'react';
import { NativeRouter } from 'react-router-native';
import PrivateRoute from 'components/PrivateRoute/index.native';
import Dashboard from 'containers/Dashboard';
import Welcome from 'containers/Welcome/index.native';
import { SecureStore } from 'expo';
import { login, historyPush } from 'src/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Root, View } from 'native-base';
import { Navigation, Card } from 'react-router-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideBar from 'components/SideBar/index.native';
import SideMenu from 'react-native-side-menu';
import { TouchableOpacity } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';

class Router extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
    currentUserId: PropTypes.string
  }

  state = {
    isOpen: false,
    selectedItem: '/dashboard',
  };

  UNSAFE_componentWillMount = async () => {
    try {
      let token = await SecureStore.getItemAsync(
        'FB_ACCESS_TOKEN'
      );
      if (!token) return;
      this.props.dispatch(login(token));
    } catch (e) {
      console.error('Error accessing SecureStore');
    }
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  updateMenuState = isOpen => this.setState({ isOpen })

  onMenuItemSelected = (item, history) => {
    this.setState({ isOpen: false, selectedItem: item});
    this.props.dispatch(historyPush(item, history));
  }

  render = () => {
    const { currentUserId, users } = this.props;
    const user = currentUserId ? users[currentUserId] : null;
    const userImage = user ? { uri: user.picture } : require('images').userCircle;
    const userName = user ? `${user.firstName} ${user.lastName}` : '';
    return <Root>
      <NativeRouter>
        <SideMenu
          menu={<SideBar onItemSelected={this.onMenuItemSelected} image={userImage} name={userName} />}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
          menuPosition='right'
        >
          <Navigation
            renderRightButton={() =>
              <View style={[s.pr2]}>
                <TouchableOpacity onPress={this.toggle}>
                  <Icon name='bars' size={24}/>
                </TouchableOpacity>
              </View>
            }
          >
            <Card
              exact
              path='/'
              render={props => (
                <Welcome initialRoute={this.initialRoute} {...props} />
              )}
            />
            <PrivateRoute exact path="/dashboard" komponent={Dashboard} />
          </Navigation>
        </SideMenu>
      </NativeRouter>
    </Root>;
  };
}

function mapStateToProps(state) {
  const { currentUserId, users } = state;
  return { currentUserId, users };
}

export default connect(mapStateToProps)(Router);
