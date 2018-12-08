import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class PasswordScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Password screen</Text>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordScreen);
