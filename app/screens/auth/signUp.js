import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { signUp } from '../../actions/auth';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    telephone: '',
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  signUp() {
    const { signUp } = this.props;
    const {
      username, password, email, telephone,
    } = this.state;
    // TO DO fix annual income
    signUp({
      username,
      password,
      email,
      telephone,
      annual_income: '100000',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>
          Welcome,
        </Text>
        <Text style={styles.greeting2}>
          sign up to continue
        </Text>
        <View style={styles.inputContainer}>
          <Input
            value={this.state.username}
            placeholder="User Name"
            type="username"
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.email}
            placeholder="Email"
            type="email"
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type="password"
            onChangeText={this.onChangeText}
          />
          <Input
            placeholder="Phone Number"
            type="telephone"
            keyboardType="numeric"
            onChangeText={this.onChangeText}
            value={this.state.telephone}
          />
        </View>
        <Button
          title="Sign Up"
          onPress={this.signUp.bind(this)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUp(data)),
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
