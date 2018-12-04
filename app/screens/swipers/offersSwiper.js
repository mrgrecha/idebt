import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Button, StyleSheet, Text, View } from 'react-native';
import OfferCard from '../../components/swiper/offerCard';
import { connect } from 'react-redux';
import { fetchSuitableOffers } from '../../actions/issues';
import SpinnerScreen from '../spinner';
import { currentIssueIdSelector, suitableOffersSelector } from '../../selectors';

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

  swipeLeft = () => {
    console.log('Left');
  };

  swipeRight = () => {
    console.log('Right');
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
        <View style={styles.container}>
          <Swiper
            ref={swiper => {
              this.swiper = swiper
            }}
            onSwipedLeft={() => this.swipeLeft()}
            onSwipedRight={() => this.swipeRight()}
            onTapCard={this.tapCard()}
            cards={this.props.suitableOffers}
            cardVerticalMargin={80}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            stackSeparation={15}
            overlayLabels={{
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
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
                title: 'Yup',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
})

const mapDispatchToProps = dispatch => ({
  fetchSuitableOffers: (issueId) => dispatch(fetchSuitableOffers(issueId)),
});

const mapStateToProps = state => ({
  suitableOffers: suitableOffersSelector(state),
  currentIssueId: currentIssueIdSelector(state),
});


export default connect(mapStateToProps, mapDispatchToProps)(OffersSwiperScreen);
