import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/shared/input';
import Button from '../../components/shared/button';

class OnOfferDebtsScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Issues Screen</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OnOfferDebtsScreen);
