import React from 'react';
import { View, Text, Button } from 'react-native';
import { PricingCard } from 'react-native-elements'
import moment from 'moment'

const IOweDebt = ({created_at, id, credit_percentage, current_size, repayDebt}) => {
  return (
    // <View>
    //   <Text>created_at: { created_at } || current_size: {current_size} || credit_percentage: {credit_percentage} || ID: {id}</Text>
    //     <Button
    //       title="Repay debt"
    //       onPress={() => {
    //         repayDebt(id);
    //       }}
    //     />
    // </View>
    <View>
    <PricingCard
      color='#4f9deb'
      title='Debt'
      price={`$ ${current_size}`}
      info={[ `${moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}`, `${credit_percentage} percentage`]}
      button={{ title: 'Repay Debt', icon: 'fingerprint' }}
      onButtonPress={() => {
            repayDebt(id);
          }}
    />
</View>
  );
};

export default IOweDebt;
