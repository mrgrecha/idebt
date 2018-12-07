import React from 'react';
import { View, Text, Button } from 'react-native';

const Issue = ({amount, id, navigation, chooseIssue}) => {
  return (
    <View>
      <Text>Amount: { amount } || ID: {id}</Text>
        <Button
          title="Choose offers"
          onPress={() => {
            chooseIssue(id);
            navigation.navigate('OffersSwiper');
          }}
        />
    </View>
  );
};

export default Issue;
