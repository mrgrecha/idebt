import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { debtsOweMeSelector } from '../../selectors';
import { fetchDebtsOweMe } from '../../actions/debts';
import OweMeDebts from '../../components/debts/oweMe.js';

class OnOfferDebtsScreen extends Component {
 componentWillMount() {
    this.props.fetchDebtsOweMe();
  }

  render() {
    const listOfDebts= this.props.debtsOweMe.map((record) => {
    return <OweMeDebts
      created_at={record.created_at}
      id={record.id}
      credit_percentage={record.credit_percentage}
      current_size={record.current_size}
      repayDebt={this.props.repayDebt}
    />;
      return <Text> Teest </Text>
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Debts Owe ME Screen</Text>
        {listOfDebts}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDebtsOweMe: () => dispatch(fetchDebtsOweMe()),
});

const mapStateToProps = state => ({
  debtsOweMe: debtsOweMeSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnOfferDebtsScreen);
