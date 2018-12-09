import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { currentUserDataSelector } from '../selectors/currentUserSelectors';
import { fetchUserData } from '../actions/currentUser';
import Colors from '../constants/colors';
import BaseIcon from '../components/settings/icon';
import Chevron from '../components/settings/chevron';
import InfoText from  '../components/settings/infoText';
import { signOut } from '../actions/auth';

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})

class SettingsScreen extends Component {
  componentWillMount() {
    this.props.fetchUserData();
  }

  render() {
    const { username, first_name, last_name, telephone, email, rating, annual_income, emp_title, balance } = this.props.data;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: "https://www.noao.edu/image_gallery/images/d2/ngc2237_400.jpg",
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{first_name} {last_name}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              {email}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        <View>
          <ListItem
            title="Balance"
            containerStyle={styles.listItemContainer}
            onPress={() => this.props.navigation.navigate('ChangeBalance')}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: Colors.green,
                }}
                icon={{
                  type: 'font-awesome',
                  name: 'dollar',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Credit card"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.props.navigation.navigate('CreditCard')}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'credit-card',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="General information"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.props.navigation.navigate('GeneralInformation')}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'font-awesome',
                  name: 'info-circle',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Password"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.props.navigation.navigate('Password')}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'font-awesome',
                  name: 'user-secret',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <InfoText text="More" />
        <View>
          <ListItem
            title="About US"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#A4C8F0' }}
                icon={{
                  type: 'ionicon',
                  name: 'md-information-circle',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Terms and Policies"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#C6C7C6' }}
                icon={{
                  type: 'entypo',
                  name: 'light-bulb',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Share our App"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Rate Us"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FECE44',
                }}
                icon={{
                  type: 'entypo',
                  name: 'star',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Send FeedBack"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#00C001',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'feedback',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <Button
            onPress={() => this.props.logOut()}
            title="Log out"
          />
        </View>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData()),
  logOut: () => dispatch(signOut()),
});

const mapStateToProps = state => ({
  data: currentUserDataSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
