import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default IssueCard = ({issue}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Credit percentage: { issue.borrower }</Text>
      <Text style={styles.text}>Id: { issue.id }</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
});
