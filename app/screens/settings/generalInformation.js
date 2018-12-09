import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Input from '../../components/shared/input';
import { currentUserDataSelector } from '../../selectors/currentUserSelectors';
import { fetchUserData, updateUserData } from '../../actions/currentUser';
import { omit } from 'underscore';
class GeneralInformationScreen extends Component {
  state = {
    username: '',
    telephone: '',
    first_name: '',
    last_name: '',
    email: '',
    emp_title: '',
    annual_income: '',
    passport_number: '',
  }

  componentWillMount() {
    this.props.fetchUserData();
    this.setState(this.props.userData);
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Username"
              type='username'
              onChangeText={this.onChangeText}
              value={this.state.username}
            />
            <Input
              placeholder="First name"
              type='first_name'
              onChangeText={this.onChangeText}
              value={this.state.first_name}
            />
            <Input
              placeholder="Last name"
              type='last_name'
              onChangeText={this.onChangeText}
              value={this.state.last_name}
            />
            <Input
              value={this.state.email}
              placeholder="Email"
              type="email"
              onChangeText={this.onChangeText}
            />
            <Input
              placeholder="Phone Number"
              type="telephone"
              keyboardType="numeric"
              onChangeText={this.onChangeText}
              value={this.state.telephone}
            />
            <Input
              placeholder="Emplotment title"
              onChangeText={this.onChangeText}
              type="emp_title"
              value={this.state.emp_title}
            />
            <Input
              placeholder="Annual Income"
              onChangeText={this.onChangeText}
              type="annual_income"
              value={this.state.annual_income}
            />
            <Input
              placeholder="Passport number"
              onChangeText={this.onChangeText}
              type="passport_number"
              value={this.state.passport_number}
            />
          </View>
          <Button
            title="Update"
            onPress={() => this.props.updateUserData(omit(this.state, 'balance')) }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData()),
  updateUserData: data => dispatch(updateUserData(data)),
});

const mapStateToProps = state => ({
  userData: currentUserDataSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInformationScreen);
