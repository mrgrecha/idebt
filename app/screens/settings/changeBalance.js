import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { connect } from 'react-redux';
import { replenishBalance, withdrawBalance } from '../../actions/currentUser';
import { currentUserIdSelector } from '../../selectors/currentUserSelectors';

class ChangeBalanceScreen extends Component {
  state = {
    moneyAmount: '',
  }


  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  replenishBalance() {
    const { replenishBalance } = this.props;
    const {
      moneyAmount,
    } = this.state;
    replenishBalance(
      this.props.userId,
      parseInt(moneyAmount),
    );
  }

  withdrawBalance() {
    const { withdrawBalance } = this.props;
    const {
      moneyAmount,
    } = this.state;
    withdrawBalance(
      this.props.userId,
      parseInt(moneyAmount),
    );
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Balance screen</Text>
        <Input
          placeholder="Money"
          type="moneyAmount"
          keyboardType="numeric"
          onChangeText={this.onChangeText}
          value={this.state.moneyAmount}
        />
        <Button
          title="Replenish Balance"
          onPress={this.replenishBalance.bind(this)}
        />
        <Button
          title="Withdraw Balance"
          onPress={this.withdrawBalance.bind(this)}
        />
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
