import React from 'react';
import { View, Text, Button } from 'react-native';

const Issue = ({amount, id, navigation, chooseIssue}) => {
  return (
    <View>
      <Text>Amount: { amount } || ID: {id}
        <Button
          title="Choose offers"
          onPress={() => {
            chooseIssue(id);
            navigation.navigate('OffersSwiper');
          }}
        />
      </Text>
    </View>
  );
};

export default Issue;
