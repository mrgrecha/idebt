import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';

class HomeScreen extends Component {

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Options"
          onPress={() => this.props.navigation.navigate('Options')}
        />
        <Button
        title="Log out"
        onPress={() => this.props.navigation.navigate('Options')}
      />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // TO DO add button for log out
    logOut: () => dispatch(signOut())
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
