import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { createOffer } from '../../actions/currentUser';

class OfferFormScreen extends Component {
  state = {
    creditFund: '',
    minLoanSize: '',
    maxLoanSize: '',
    creditPercentage: '',
    isWithCapitalization: true,
    gracePeriod: '',
    returnPeriod: '',
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  createOffer() {
    const { createOffer } = this.props;
    const {
      creditFund, minLoanSize, maxLoanSize,
      creditPercentage, isWithCapitalization, gracePeriod,
      returnPeriod,
    } = this.state;

    createOffer({
      "credit_fund": parseInt(creditFund),
      "min_loan_size": parseInt(minLoanSize),
      "max_loan_size": parseInt(maxLoanSize),
      "credit_percentage": parseInt(creditPercentage) / 100.,
      "is_with_capitalization": isWithCapitalization,
      "grace_period": parseInt(gracePeriod),
      "return_period": parseInt(returnPeriod)
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
              value={this.state.creditFund}
              placeholder="Credit fund"
              type="creditFund"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.minLoanSize}
              placeholder="Min loan size"
              type="minLoanSize"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.maxLoanSize}
              placeholder="Max loan size"
              type="maxLoanSize"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.creditPercentage}
              placeholder="Credit percentage"
              type="creditPercentage"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.gracePeriod}
              placeholder="Grace period"
              type="gracePeriod"
              onChangeText={this.onChangeText}
            />
            <Input
              value={this.state.returnPeriod}
              placeholder="Return period"
              type="returnPeriod"
              onChangeText={this.onChangeText}
            />
        </View>
        <Button
          title="Create Offer"
          onPress={this.createOffer.bind(this)}
        />
        </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createOffer: data => dispatch(createOffer(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferFormScreen);


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
