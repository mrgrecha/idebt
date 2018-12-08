import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions/currentUser';
import { currentUserAuthTokenSelector, currentUserDataSelector } from '../selectors/currentUserSelectors';

class ProfileScreen extends Component {
  componentWillMount() {
    this.props.fetchUserData();
  }

  render() {
    const { username, balance, annual_income, passport_number, rating, telephone, email } = this.props.data;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My info</Text>
        <Text>username: { username }</Text>
        <Text>balance: { balance }</Text>
        <Text>annual_income: { annual_income }</Text>
        <Text>passport_number: { passport_number }</Text>
        <Text>rating: { rating }</Text>
        <Text>telephone: { telephone }</Text>
		    <Text>email: { email }</Text>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
  data: currentUserDataSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
