import React from 'react';
import { View, Text, Button } from 'react-native';

const Offer = ({creditFund, id, navigation, chooseOffer}) => {
  return (
    <View>
      <Text>Credit fund: { creditFund } || ID: {id}
        <Button
          title="Choose issue"
          onPress={() => {
            chooseOffer(id);
            navigation.navigate('IssuesSwiper');
          }}
        />
      </Text>
    </View>
  );
};

export default Offer;
