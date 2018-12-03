import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/shared/input';
import Button from '../components/shared/button';
import { createIssue } from '../actions/currentUser';
import { currentUserAuthTokenSelector } from '../selectors/currentUserSelectors';

class IssueFormScreen extends Component {
  state = {
    minСreditPeriod: '',
    maxOverpay: '',
    amount: '',
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  createIssue() {
    const { createIssue } = this.props;
    const {
      minСreditPeriod, maxOverpay, amount,
    } = this.state;

    createIssue({
      'min_credit_period': parseInt(minСreditPeriod),
      'max_overpay': parseInt(maxOverpay),
      'amount': parseInt(amount)
    });
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.greeting2}>
          Fill in your desired criteria 
          </Text>
          <View style={styles.inputContainer}>
            <Input
              value={this.state.minСreditPeriod}
              placeholder="Minimal credit period"
              type="minСreditPeriod"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.maxOverpay}
              placeholder="Maximum overpay"
              type="maxOverpay"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.amount}
              placeholder="Amount"
              type="amount"
              onChangeText={this.onChangeText}
            />
        </View>
        <Button
          title="Create issue"
          onPress={this.createIssue.bind(this)}
        />
        </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createIssue: data => dispatch(createIssue(data)),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueFormScreen);


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  greeting: {
    marginTop: 20,
    fontSize: 24,
  },
  greeting2: {
    color: '#666',
    fontSize: 24,
    marginTop: 5,
  },
  heading: {
    flexDirection: 'row',
  },
  headingImage: {
    width: 38,
    height: 38,
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent',
  },
});
