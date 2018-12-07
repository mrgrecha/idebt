import React from 'react';
import { View, Text, Button } from 'react-native';

const IOweDebt = ({created_at, id, credit_percentage, current_size, repayDebt}) => {
  return (
    <View>
      <Text>created_at: { created_at } || current_size: {current_size} || credit_percentage: {credit_percentage} || ID: {id}</Text>
        <Button
          title="Repay debt"
          onPress={() => {
            repayDebt(id);
          }}
        />
    </View>
  );
};

export default IOweDebt;
