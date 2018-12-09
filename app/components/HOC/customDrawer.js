import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements'
import { DrawerItems } from 'react-navigation';
import { currentUserDataSelector } from '../../selectors/currentUserSelectors';

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
  background:{
        backgroundColor: '#f50057',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
  },
})

DrawerContent = (props) => (
  <View>
    <View
      style={styles.background}
    >
      <View style={styles.userImage}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: "https://www.noao.edu/image_gallery/images/d2/ngc2237_400.jpg",
          }}
        />
      </View>
      <View styles={styles.userRow} > 
        <Text
          style={{
            fontSize: 16,
          }}
        >
          {props.data.first_name} {props.data.last_name}
        </Text>
      </View>
    </View>
    <DrawerItems {...props} />
  </View>
)


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
  data: currentUserDataSelector(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
