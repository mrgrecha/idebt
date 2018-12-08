import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { debtsOweMeSelector } from '../../selectors';
import { fetchDebtsOweMe } from '../../actions/debts';
import OweMeDebts from '../../components/debts/oweMe.js';
import ErrorModal from '../../components/modals/errorModal';

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
      />;
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Debts Owe ME Screen</Text>
        <ErrorModal/>
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
