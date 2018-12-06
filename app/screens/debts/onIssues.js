import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { debtsIOweSelector } from '../../selectors';
import { fetchDebtsIOwe } from '../../actions/debts';

class OnIssueDebtsScreen extends Component {
  componentWillMount() {
    this.props.fetchDebtsIOwe();
  }

  render() {
    console.log(this.props.debtsIOwe)
    const listOfDebts= this.props.debtsIOwe.map((record) => {
    // return <Issue
    //   amount={record.amount}
    //   id={record.id}
    //   navigation={this.props.navigation}
    //   chooseIssue={this.props.chooseIssue}
    // />;
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Debts I Owe Screen</Text>
        // {listOfDebts}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDebtsIOwe: () => dispatch(fetchDebtsIOwe()),
});

const mapStateToProps = state => ({
  debtsIOwe: debtsIOweSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnIssueDebtsScreen);
