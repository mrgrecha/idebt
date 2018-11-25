import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, Dimensions, Platform  } from 'react-native';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: itemHeight,
        paddingHorizontal: horizontalMargin
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
        // other styles for the inner container
    }
});


export default class MyCarousel extends Component {

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                  <Text>{ item.title }</Text>
                </View>
            </View>
        );
    }

    render () {
        const datas = [{title: 'First'}, {title: 'Second'}, {title: 'Third'}]

        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={datas}
              renderItem={this._renderItem}
              sliderWidth={250}
              itemWidth={250}
              layoutCardOffset={9}
            />
        );
    }
}