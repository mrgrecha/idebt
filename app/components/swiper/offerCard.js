import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default OfferCard = ({offer}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Credit fund: { offer.credit_fund }</Text>
      <Text style={styles.text}>Id: { offer.id }</Text>
      <Text style={styles.text}>Credit percentage: { offer.credit_percentage }</Text>
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
