import React from 'react';
import { View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements'

const Offer = ({creditFund,creditPercentage, returnPeriod, id, navigation, chooseOffer}) => {
  return (
    <ListItem
      key={id}
      title={`Credit fund ${creditFund}`}
      subtitle={`Return Period ${returnPeriod} \nCredit Percentage ${creditPercentage}`}
      subtitleNumberOfLines={2}
      leftIcon={{name: 'av-timer'}}
      onPress={() => {
        chooseOffer(id);
        navigation.navigate('IssuesSwiper');}}
    />
  );
};

export default Offer;
