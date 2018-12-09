import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, StyleSheet } from 'react-native';
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
        key={record.id}
        created_at={record.created_at}
        id={record.id}
        credit_percentage={record.credit_percentage}
        current_size={record.current_size}
      />;
    });
    return (
      <ScrollView>
        <Text>Debts Owe ME Screen</Text>
        {listOfDebts}
      </ScrollView>
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
