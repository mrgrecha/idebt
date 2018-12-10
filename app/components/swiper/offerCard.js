import React from 'react';
import { Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

export default OfferCard = ({offer}) => {
  return (
    <Card
      title='Offer'>
      <ListItem key={offer.credit_fund} title='Credit fund' rightTitle={`${offer.credit_fund} $`} hideChevron/>
      <ListItem key={offer.return_period} title='Days to return' rightTitle={offer.return_period} hideChevron/>
      <ListItem key={offer.grace_period} title='Grace perion' rightTitle={offer.grace_period} hideChevron/>
      <ListItem key={offer.max_loan_size} title='Percentage' rightTitle={`${offer.credit_percentage * 100} %`} hideChevron/>
      <Button title='More information' />
    </Card>
  );
};
