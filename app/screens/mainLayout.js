import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, Text } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { signOut, fetchStatistics } from '../actions/currentUser';
import { currentUserAuthTokenSelector, currentUserStatisticsSelector } from '../selectors/currentUserSelectors';

class MainLayout extends Component {
  componentWillMount() {
    this.props.fetch_statistics()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Left>
            <Icon  name='menu' style={{ justifyContent: 'center' }} onPress={()=>this.props.navigation.openDrawer()} />
          </Left>
          <Right>
            <Text>$ {this.props.data && this.props.data.balance}</Text>
          </Right>
        </Header>
          {this.props.data && this.props.children}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetch_statistics: () => dispatch(fetchStatistics()),
});

const mapStateToProps = state => ({
  token: currentUserAuthTokenSelector(state),
  data: currentUserStatisticsSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
