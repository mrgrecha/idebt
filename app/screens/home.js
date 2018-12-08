import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { fetchUserData } from '../actions/currentUser';
import { signOut } from '../actions/auth';
import { currentUserAuthTokenSelector } from '../selectors/currentUserSelectors';

class HomeScreen extends Component {

  componentWillMount() {
    this.props.fetchUserData();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Issue"
          onPress={() => this.props.navigation.navigate('Issue')}
        />
        <Button
          title="Offer"
          onPress={() => this.props.navigation.navigate('Offer')}
        />
        <Button
          title="Logout"
          onPress={() => this.props.logOut()}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
  fetchUserData: () => dispatch(fetchUserData()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
