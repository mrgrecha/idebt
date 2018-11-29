import React, { Component } from 'react';
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { statistics } from '../actions/currentUser';
import { currentUserAuthTokenSelector, currentUserStatisticsSelector } from '../selectors/currentUserSelectors';

class StatisticsScreen extends Component {
	componentWillMount() {
		// this.props.fetch_statistics()
		console.log(this.props);
	}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Get stats"
          onPress={() => this.props.fetch_statistics()}
        />
        <Text>My Statistics</Text>
        <Text>username: { this.props.stats.username }</Text>
        <Text>balance: { this.props.stats.balance }</Text>
        <Text>annual_income: { this.props.stats.annual_income }</Text>
        <Text>passport_number: { this.props.stats.passport_number }</Text>
        <Text>rating: { this.props.stats.rating }</Text>
        <Text>telephone: { this.props.stats.telephone }</Text>
		<Text>email: { this.props.stats.email }</Text>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetch_statistics: () => dispatch(statistics()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
  stats: currentUserStatisticsSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen);