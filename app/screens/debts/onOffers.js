import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
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
    if (this.props.debtsOweMe.length == 0) {
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> You haven't got any debts</Text>
        </View>
      )
    }
    else {
      return (
        <ScrollView>
          {listOfDebts}
        </ScrollView>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDebtsOweMe: () => dispatch(fetchDebtsOweMe()),
});

const mapStateToProps = state => ({
  debtsOweMe: debtsOweMeSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnOfferDebtsScreen);
