import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { debtsIOweSelector } from '../../selectors';
import { fetchDebtsIOwe, repayDebt } from '../../actions/debts';
import IOweDebt from '../../components/debts/iOwe.js';

class OnIssueDebtsScreen extends Component {
  componentWillMount() {
    this.props.fetchDebtsIOwe();
  }

  render() {
    console.log(this.props.debtsIOwe)
    const listOfDebts= this.props.debtsIOwe.map((record) => {
    return <IOweDebt
      created_at={record.created_at}
      id={record.id}
      credit_percentage={record.credit_percentage}
      current_size={record.current_size}
      repayDebt={this.props.repayDebt}
    />;
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Debts I Owe Screen</Text>
        {listOfDebts}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDebtsIOwe: () => dispatch(fetchDebtsIOwe()),
  repayDebt: id => dispatch(repayDebt(id)),
});

const mapStateToProps = state => ({
  debtsIOwe: debtsIOweSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnIssueDebtsScreen);
