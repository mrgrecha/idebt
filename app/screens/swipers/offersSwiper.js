import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Button, StyleSheet, Text, View } from 'react-native';
import OfferCard from '../../components/swiper/offerCard';
import { connect } from 'react-redux';
import { fetchSuitableOffers } from '../../actions/issues';
import { createOfferMatch } from '../../actions/offers';
import SpinnerScreen from '../spinner';
import { currentIssueIdSelector, suitableOffersSelector } from '../../selectors';
import colors from '../../constants/colors';

class OffersSwiperScreen extends Component {

  componentWillMount() {
    this.props.fetchSuitableOffers(this.props.currentIssueId);
  }

  renderCard = (offer) => {
    return (
      <OfferCard offer={offer}/>
    )
  };

  onSwipedAllCards = () => {
    console.log('Cards finished');
  };

  swipeLeft = (index) => {
    console.log('Left');
  };

  swipeRight = (index) => {
    const { suitableOffers, currentIssueId } = this.props;
    const currentOffer = suitableOffers[index];
    const matchData = {
      from_id: currentIssueId,
      to_id: currentOffer.id,
      match_type: 'OFF',
    };
    this.props.createMatch(matchData);
  };

  tapCard = () => {
    console.log('Tap');
  };

  render () {
    if (this.props.suitableOffers === null) {
      return ( <SpinnerScreen /> )
    }
    else if (this.props.suitableOffers.length === 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> You haven't got any suitable offers</Text>
      </View>
      )
    }
    else {
      return (
        <View>
          <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            onSwipedLeft={(index) => this.swipeLeft(index)}
            onSwipedRight={(index) => this.swipeRight(index)}
            onTapCard={this.tapCard()}
            cards={this.props.suitableOffers}
            cardVerticalMargin={100}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            stackSeparation={15}
            overlayLabels={{
              left: {
                title: 'No',
                style: {
                  label: {
                    backgroundColor: 'red',
                    borderColor: 'red',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                title: 'Like',
                style: {
                  label: {
                    backgroundColor: 'green',
                    borderColor: 'green',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              },
            }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          >
            <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
          </Swiper>
        </View>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSuitableOffers: (issueId) => dispatch(fetchSuitableOffers(issueId)),
  createMatch: (data) => dispatch(createOfferMatch(data)),
});

const mapStateToProps = state => ({
  suitableOffers: suitableOffersSelector(state),
  currentIssueId: currentIssueIdSelector(state),
});


export default connect(mapStateToProps, mapDispatchToProps)(OffersSwiperScreen);
