import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { replenishBalance, withdrawBalance } from '../../actions/currentUser';
import { currentUserIdSelector } from '../../selectors/currentUserSelectors';

class ChangeBalanceScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Balance screen</Text>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  replenishBalance: (userId, value) => dispatch(replenishBalance(userId, value)),
  withdrawBalance: (userId, value) => dispatch(withdrawBalance(userId, value)),
});

const mapStateToProps = state => ({
  userId: currentUserIdSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeBalanceScreen);
