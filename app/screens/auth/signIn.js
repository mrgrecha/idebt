import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal,
} from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';
import { connect } from 'react-redux'

// import { authenticate, confirmUserLogin } from '../actions'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
        </View>
        <Text style={[styles.greeting]}>
          Welcome back,
        </Text>
        <Text style={[styles.greeting2]}>
          sign in to continue
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="User Name"
            type='username'
            onChangeText={this.onChangeText}
            value={this.state.username}
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText}
            value={this.state.password}
            secureTextEntry
          />
        </View>

        <Button
          title='Sign In'
          onPress={this.signIn.bind(this)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  // dispatchConfirmUserLogin: authCode => confirmUserLogin(authCode),
  // dispatchAuthenticate: (username, password) => authenticate(username, password)
}

const mapStateToProps = state => ({
  // auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    flexDirection: 'row'
  },
  headingImage: {
    width: 38,
    height: 38
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent',
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  greeting: {
    marginTop: 20,
    fontSize: 24,
  },
  greeting2: {
    color: '#666',
    fontSize: 24,
    marginTop: 5,
  }
});
