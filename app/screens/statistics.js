import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import {
  LineChart,
  PieChart,
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { fetchUserStatistics } from '../actions/statistics';
import { statisticsSelector, statisticsIsLoadedSelector } from '../selectors/statisticsSelectors';
import { currentUserIdSelector } from '../selectors/currentUserSelectors';
import Colors from '../constants/colors';
import SpinnerScreen from './spinner';

class StatisticsScreen extends Component {
  componentWillMount() {
    this.props.fetchUserStatistics(this.props.currentUserId);
  }

  render() {
    const { debts, summaries, finance } = this.props.data;
    const ratings = []
    for (i in summaries) {
      ratings.push(summaries[i].rating);
    }
    const screenWidth = Dimensions.get('window').width;
    const chartConfig = {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    };
    if (!this.props.isLoaded) {
      return ( <SpinnerScreen /> )
    }
    else {
      return (
        <ScrollView>
          <Text>Statistics</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                data: ratings
              }]
            }}
            width={screenWidth} // from react-native
            height={220}
            chartConfig={chartConfig}
            bezier
          />
          <PieChart
            data={[
              { name: 'Paid Debts', count: debts.closed, color: Colors.lightGray2, legendFontColor: '#7F7F7F', legendFontSize: 10 },
              { name: 'Not paid debts', count: debts.pending, color: Colors.gray, legendFontColor: '#7F7F7F', legendFontSize: 10 },
            ]}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </ScrollView>
      );
    }
  }
}


const mapDispatchToProps = dispatch => ({
  fetchUserStatistics: (userId) => dispatch(fetchUserStatistics(userId)),
});

const mapStateToProps = state => ({
  data: statisticsSelector(state),
  currentUserId: currentUserIdSelector(state),
  isLoaded: statisticsIsLoadedSelector(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen);
