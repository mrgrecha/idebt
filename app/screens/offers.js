import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text } from 'react-native';
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
        key={record.id}
        creditFund={record.credit_fund}
        id={record.id}
        navigation={this.props.navigation}
        chooseOffer={this.props.chooseOffer}
      />;
    });
    return (
      <ScrollView>
        {listOfOffers}
      </ScrollView>
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
