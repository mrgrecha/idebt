import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { signOut, fetchStatistics } from '../actions/currentUser';
import { currentUserAuthTokenSelector, currentUserStatisticsSelector } from '../selectors/currentUserSelectors';
import MainLayout from './mainLayout'

class HomeScreen extends Component {
  render() {
    return (
      <MainLayout>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Log out"
            onPress={() => this.props.logOut()}
          />
        </View>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
  fetch_statistics: () => dispatch(fetchStatistics()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
