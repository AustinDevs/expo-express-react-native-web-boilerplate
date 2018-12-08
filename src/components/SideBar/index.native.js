import React, { PureComponent } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

class SideBar extends PureComponent {
  static propTypes = {
    onItemSelected: PropTypes.func.isRequired,
    image: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string,
    history: PropTypes.object
  };

  render = () =>
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={this.props.image}
        />
        <Text style={styles.name}>{this.props.name}</Text>
      </View>

      <Text
        onPress={() => this.props.onItemSelected('/dashboard', this.props.history)}
        style={styles.item}
      >
        Dashboard
      </Text>
    </ScrollView>
}

export default connect()(withRouter(SideBar));
