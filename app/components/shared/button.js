import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';


export default ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={[styles.buttonText]}>{title}</Text>
      {
        false && (
          <View style={styles.activityIndicator} />
        )
      }
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 22,
    letterSpacing: 0.5,
  },
  activityIndicator: {
    transform: [{ scale: 0.70 }],
    marginTop: 3.5,
    marginLeft: 5,
  },
});
