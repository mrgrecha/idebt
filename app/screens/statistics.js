import React, { Component } from 'react';
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { fetch_statistics } from '../actions/currentUser';
import { currentUserAuthTokenSelector, currentUserStatisticsSelector } from '../selectors/currentUserSelectors';

class StatisticsScreen extends Component {
	componentWillMount() {
		this.props.fetch_statistics()
	}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>My Statistics</Text>
        <Text>username: { this.props.data.username }</Text>
        <Text>balance: { this.props.data.balance }</Text>
        <Text>annual_income: { this.props.data.annual_income }</Text>
        <Text>passport_number: { this.props.data.passport_number }</Text>
        <Text>rating: { this.props.data.rating }</Text>
        <Text>telephone: { this.props.data.telephone }</Text>
		<Text>email: { this.props.data.email }</Text>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetch_statistics: () => dispatch(fetch_statistics()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
  data: currentUserStatisticsSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen);
