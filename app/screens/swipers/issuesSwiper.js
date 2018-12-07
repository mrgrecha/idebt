import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import { Button, StyleSheet, Text, View } from 'react-native';
import IssueCard from '../../components/swiper/issueCard';
import { connect } from 'react-redux';
import { fetchSuitableIssues } from '../../actions/offers';
import { createIssueMatch } from '../../actions/issues';
import { offerIdSelector, suitableIssuesSelector } from '../../selectors';
import SpinnerScreen from '../spinner';

class IssuesSwiperScreen extends Component {

  componentWillMount() {
    this.props.fetchSuitableIssues(this.props.currentOfferId);
  }

  renderCard = (issue) => {
    return (
      <IssueCard issue={issue}/>
    )
  };

  onSwipedAllCards = () => {
    console.log('Cards finished');
  };

  swipeLeft = (index) => {
    console.log('Left');
  };

  swipeRight = (index) => {
    const { suitableIssues, currentOfferId } = this.props;
    const currentIssue = suitableIssues[index];
    const matchData = {
      from_id: currentOfferId,
      to_id: currentIssue.id,
      match_type: 'ISS',
    };
    this.props.createMatch(matchData);
  };

  tapCard = () => {
    console.log('Tap');
  };

  render () {
    if (this.props.suitableIssues == null) {
      return ( <SpinnerScreen /> )
    }
  else if (this.props.suitableIssues.length == 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> You haven't got any suitable issues</Text>
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
          onSwipedLeft={(index) => this.swipeLeft(index)}
          onSwipedRight={(index) => this.swipeRight(index)}
          onTapCard={this.tapCard()}
          cards={this.props.suitableIssues}
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
    )}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
})


const mapDispatchToProps = dispatch => ({
  fetchSuitableIssues: (offerId) => dispatch(fetchSuitableIssues(offerId)),
  createMatch: (data) => dispatch(createIssueMatch(data)),
});

const mapStateToProps = state => ({
  suitableIssues: suitableIssuesSelector(state),
  currentOfferId: offerIdSelector(state),
});


export default connect(mapStateToProps, mapDispatchToProps)(IssuesSwiperScreen);
