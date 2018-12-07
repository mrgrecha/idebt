import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { fetchStatistics } from '../actions/currentUser';
import { signOut } from '../actions/auth';
import { currentUserAuthTokenSelector } from '../selectors/currentUserSelectors';
import ErrorModal from '../components/debts/errorModal';

class HomeScreen extends Component {

  componentWillMount() {
    this.props.fetchStatistics();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ErrorModal/>
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
  fetchStatistics: () => dispatch(fetchStatistics()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
