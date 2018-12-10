import React from 'react';
import { View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements'


const Issue = ({amount, maxOverpay, minCreditPeriod, id, navigation, chooseIssue}) => {
  return (
   <ListItem
      key={amount}
      title={`Maximal Overpay ${maxOverpay}`}
      subtitle={`Minimal Credit Period ${minCreditPeriod} \nAmount ${amount}`}
      subtitleNumberOfLines={2}
      leftIcon={{name: 'av-timer'}}
      onPress={() => {
        chooseIssue(id);
        navigation.navigate('OffersSwiper');}}
    />
  );
};

export default Issue;
