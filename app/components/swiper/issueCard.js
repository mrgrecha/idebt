import React from 'react';
import { Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

export default IssueCard = ({issue}) => {
  return (
    <Card
      title='Issue'>
      <ListItem key={issue.amount} title='Amount' rightTitle={`${issue.amount} $`} hideChevron/>
      <ListItem key={issue.max_overpay} title='Max overpay' rightTitle={issue.max_overpay} hideChevron/>
      <ListItem key={issue.min_credit_period} title='Credit period' rightTitle={issue.min_credit_period} hideChevron/>
      <ListItem key={issue.borrower_stats} title='Rating' rightTitle={`${issue.borrower_stats.rating} %`} hideChevron/>
      <Button title='Borrower statistics' />
    </Card>
  );
};
