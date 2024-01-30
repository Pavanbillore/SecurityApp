import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/Variables';
import Approval from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

export default class Footer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: global.userSession,
    };
  }

  functionCall = screen => {
    this.props.navigation.navigate(screen);
  };

  render() {
    //console.log('test'+this.state.userData);
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.backfooter}
          colors={[colors.white, colors.white]}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Icon
              name="home"
              size={24}
              color={
                this.props.active == 1 ? colors.blue : colors.lightBlue
              }></Icon>
            <Text
              style={
                this.props.active == 1
                  ? {color: colors.blue}
                  : {color: colors.lightBlue}
              }>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('EntryRequest')}>
            <Icon
              // name="edit"
              name="clipboard-pencil"
              type={'foundation'}
              size={24}
              color={
                this.props.active == 3 ? colors.blue : colors.lightBlue
              }></Icon>
            <Text
              style={
                this.props.active == 3
                  ? {color: colors.blue}
                  : {color: colors.lightBlue}
              }>
              Entry Request
            </Text>
          </TouchableOpacity>
          {/*
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('EntryApproved')}>
            <Approval
              name="approval"
              size={24}
              color={this.props.active == 5 ? colors.blue : colors.lightBlue}
            />
            <Text
              style={
                this.props.active == 5
                  ? {color: colors.blue}
                  : {color: colors.lightBlue}
              }>
              Entry Approval
            </Text>
          </TouchableOpacity>
            */}
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('ValidateExit')}>
            <Icon
              // name="account-circle"
              // type="feather"
              name="local-shipping"
              size={24}
              color={
                this.props.active == 4 ? colors.blue : colors.lightBlue
              }></Icon>
            <Text
              style={
                this.props.active == 4
                  ? {color: colors.blue}
                  : {color: colors.lightBlue}
              }>
              Validate Exit
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // flex: 1,
    // width: Dimensions.get('window').width,
    // justifyContent: 'center',
    // borderRadius: 10,
  },
  backfooter: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingVertical: 15,
    resizeMode: 'contain',
    // height: 80,
    width: Dimensions.get('window').width,
    borderColor: colors.lightGray,
    borderWidth: 0.5,
    // width: '100%',
  },
  activetabs: {
    width: 80,
    marginTop: -50,
    padding: 10,
    borderRadius: 50,
    height: 80,
    backgroundColor: 'transparent',
  },
  tabs: {
    alignItems: 'center',
    // width: '20%',
  },
  foortertext: {
    color: colors.newgray,
  },
  foortertextwhite: {
    color: 'white',
  },
});

// <TouchableOpacity
//   style={styles.tabs}
//   onPress={() => this.props.navigation.navigate('MapScreen')}>
//   <Icon
//     name="location-on"
//     size={24}
//     color={
//       this.props.active == 5 ? colors.blue : colors.lightBlue
//     }></Icon>
//   <Text
//     style={
//       this.props.active == 5
//         ? {color: colors.blue}
//         : {color: colors.lightBlue}
//     }>
//     GPS
//   </Text>
// </TouchableOpacity>
