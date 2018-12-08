import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native'

class StatisticsScreen extends Component {

  render() {
    const tempData = [0.4, 0.6, 0.8];
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
    return (
      <ScrollView>
        <Text>
          Statistics
        </Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={screenWidth} // from react-native
          height={220}
          chartConfig={chartConfig}
        />
        <ProgressChart
          data={tempData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

        <PieChart
          data={[
            { name: 'Paid Debts', count: 215, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Not paid debts', count: 28, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
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


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen);
