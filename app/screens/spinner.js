import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SpinnerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={true}
          textContent={'Loading...'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});
