import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchOffers, chooseOffer } from '../actions/offers';
import Offer from '../components/offers/offer';
import { offersSelector } from '../selectors';

class OffersScreen extends Component {

  componentWillMount() {
    this.props.fetchOffers();
  }

  render() {
    const listOfOffers = this.props.offers.map((record) => {
      return <Offer
        creditFund={record.credit_fund}
        id={record.id}
        navigation={this.props.navigation}
        chooseOffer={this.props.chooseOffer}
      />;
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Offers Screen</Text>
        {listOfOffers}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => dispatch(fetchOffers()),
  chooseOffer: id => dispatch(chooseOffer(id)),
});

const mapStateToProps = state => ({
  offers: offersSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersScreen);
