import React from 'react';
import { View, Text, Button } from 'react-native';

const OweMeDebts = ({created_at, id, credit_percentage, current_size}) => {
  return (
    <View>
      <Text>created_at: { created_at } || current_size: {current_size} || credit_percentage: {credit_percentage} || ID: {id}</Text>
    </View>
  );
};

export default OweMeDebts;
