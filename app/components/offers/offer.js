import React from 'react';
import { View, Text, Button } from 'react-native';

const Offer = ({creditFund, id, navigation, chooseOffer}) => {
  return (
    <View>
      <Text>Credit fund: { creditFund } || ID: {id}</Text>
      <Button
        title="Choose issue"
        onPress={() => {
          chooseOffer(id);
          navigation.navigate('IssuesSwiper');
        }}
      />
    </View>
  );
};

export default Offer;
