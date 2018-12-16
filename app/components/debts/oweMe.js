import React from 'react';
import { View, Text, Button } from 'react-native';
import { PricingCard } from 'react-native-elements';
import moment from 'moment';

const OweMeDebts = ({created_at, id, credit_percentage, current_size}) => {
  return (
    <View>
      <PricingCard
        color='#4f9deb'
        title='Investment'
        price={`$ ${current_size}`}
        info={[ `${moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}`, `${credit_percentage} percentage`]}
        button={{ title: 'Notify borrower', icon: 'fingerprint' }}
        />
    </View>
  );
};

export default OweMeDebts;
