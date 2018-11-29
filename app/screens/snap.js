import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import {  View, StyleSheet, Dimensions, Platform  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

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
            <Container>
        <Header />
            <Content>
              <Card>
                // <CardItem>
                //   <Left>
        
                //     <Body>
                //       <Text>NativeBase</Text>
                //       <Text note>GeekyAnts</Text>
                //     </Body>
                //   </Left>
                // </CardItem>
                // <CardItem cardBody>
                // </CardItem>
                // <CardItem>
                //   <Left>
                //     <Button transparent>
                //       <Icon active name="thumbs-up" />
                //       <Text>12 Likes</Text>
                //     </Button>
                //   </Left>
                //   <Body>
                //     <Button transparent>
                //       <Icon active name="chatbubbles" />
                //       <Text>4 Comments</Text>
                //     </Button>
                //   </Body>
                //   <Right>
                //     <Text>11h ago</Text>
                //   </Right>
                // </CardItem>
              </Card>
            </Content>
          </Container>
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