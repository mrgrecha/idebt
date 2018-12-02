import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class RequestsScreen extends Component {
  render() {
    return (
    	<MainLayout>
	      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	        <Text>My requests</Text>
	      </View>
	    </MainLayout>
    );
  }
}
