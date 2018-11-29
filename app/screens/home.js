import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { signOut } from '../actions/currentUser';
import { currentUserAuthTokenSelector } from '../selectors/currentUserSelectors';

class HomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Log out"
          onPress={() => this.props.logOut()}
        />

        <Text>Snap Screen</Text>
        <Button
          title="snap"
          onPress={() => navigate('Snap')}
        />

      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
