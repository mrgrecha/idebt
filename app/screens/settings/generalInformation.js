import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { replenishBalance, withdrawBalance } from '../../actions/currentUser';
import { currentUserIdSelector } from '../../selectors/currentUserSelectors';

class GeneralInformationScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>General information screen</Text>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInformationScreen);
