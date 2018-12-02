import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Right } from 'native-base';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { currentUserStatisticsSelector } from '../../selectors/currentUserSelectors';

export default function (ComposedComponent) {
  class MenuHeader extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Header>
            <Left>
              <Icon  name='reorder' style={{ justifyContent: 'center' }} onPress={()=>this.props.navigation.openDrawer()} />
            </Left>
            <Right>
              <Text>$ {this.props.data && this.props.data.balance}</Text>
            </Right>
          </Header>
          <ComposedComponent {...this.props} />
        </View>
      );
    }
  }

  const mapStateToProps = state => ({
    data: currentUserStatisticsSelector(state),
  });

  return connect(mapStateToProps)(MenuHeader);
}
