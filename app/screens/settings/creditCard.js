import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CreditCardInput } from "react-native-credit-card-input";
class CreditCardScreen extends Component {
  onChageCreditCard(form) {
    console.log(form);
  };

  render() {
    return (
      <CreditCardInput onChange={this.onChageCreditCard} />
    );
  }
}


const mapDispatchToProps = dispatch => ({
  // replenishBalance: (userId, value) => dispatch(replenishBalance(userId, value)),
  // withdrawBalance: (userId, value) => dispatch(withdrawBalance(userId, value)),
});

const mapStateToProps = state => ({
  // userId: currentUserIdSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardScreen);
