import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import {
  LineChart,
  PieChart,
  BarChart,
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import { fetchUserStatistics } from '../actions/statistics';
import { statisticsSelector, statisticsIsLoadedSelector } from '../selectors/statisticsSelectors';
import { currentUserIdSelector } from '../selectors/currentUserSelectors';
import Colors from '../constants/colors';
import SpinnerScreen from './spinner';
import { isEmpty } from 'underscore';

class StatisticsScreen extends Component {
  componentWillMount() {
    this.props.fetchUserStatistics(this.props.currentUserId);
  }

  render() {
    const { debts, summaries, finance } = this.props.data;
    const ratings = [];
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
    let pieChartForDebts = null;
    if (isEmpty(debts) || debts === undefined) {
      pieChartForDebts = (<Text> You haven't got any debts </Text>);
    } else {
      pieChartForDebts = (<View>
        <Text> Your debts </Text>
        <PieChart
          data={[
            { name: 'Paid Debts', count: debts.closed, color: Colors.lightGray2, legendFontColor: '#7F7F7F', legendFontSize: 10 },
            { name: 'Not paid debts', count: debts.pending, color: Colors.gray, legendFontColor: '#7F7F7F', legendFontSize: 10 },
          ]}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>);
      }

    if (!this.props.isLoaded) {
      return ( <SpinnerScreen /> )
    }
    else {
      return (
        <ScrollView>
          <Text> Your rating </Text>
            <LineChart
              data={{
                labels: ['07', '08', '09', '10', '11', '12'],
                datasets: [{
                  data: ratings
                }]
              }}
              width={screenWidth} // from react-native
              height={400}
              chartConfig={chartConfig}
              bezier
            />
            <Text> Your income and debts </Text>
            <BarChart
              data={{
                labels: ["Last month +", 'Last month -', 'All time +', 'All time -'],
                datasets: [{
                  data: [finance.active_last_month.income, finance.active_last_month.total_debt, finance.all_time.income, finance.all_time.total_debt]
                }]
              }}
              width={screenWidth}
              height={400}
              chartConfig={chartConfig}
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
