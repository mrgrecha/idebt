import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { updatePassword } from '../../actions/currentUser';
import { currentUserIdSelector } from '../../selectors/currentUserSelectors';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';

class PasswordScreen extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
    confirmationPassword: ''
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  updatePassword() {
    const { updatePassword } = this.props;
    const {
      oldPassword, newPassword, confirmationPassword
    } = this.state;
    updatePassword(
      this.props.userId,
      {'current_password': oldPassword,
       'password': newPassword,
       'password_confirmation': confirmationPassword}
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Password screen</Text>
        <Input
            value={this.state.oldPassword}
            placeholder="Old password"
            secureTextEntry
            type="oldPassword"
            onChangeText={this.onChangeText}
        />
        <Input
            value={this.state.newPassword}
            placeholder="New password"
            secureTextEntry
            type="newPassword"
            onChangeText={this.onChangeText}
        />
        <Input
            value={this.state.confirmationPassword}
            placeholder="Confirmation password"
            secureTextEntry
            type="confirmationPassword"
            onChangeText={this.onChangeText}
        />
         <Button
          title="update password"
          onPress={this.updatePassword.bind(this)}
        />
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updatePassword: (userId, password) => dispatch(updatePassword(userId, password)),
});

const mapStateToProps = state => ({
  userId: currentUserIdSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordScreen);
