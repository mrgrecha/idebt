import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class OptionsScreen extends Component {

  render() {
    return (
      <Text>Options</Text>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(OptionsScreen);
