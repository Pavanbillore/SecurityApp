import React, {useEffect} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/SplashScreenStyle';
import {colors} from '../utils/Variables';

const SplashScreen = ({navigation}) => {
  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return false;
    }
  };

  const checkServerDetails = async () => {
    var collectionStr = await getData('collectionStr');
    if (collectionStr && collectionStr != null) {
      global.collectionStr = collectionStr;
      var userId = await getData('userId');
      var email = await getData('email');
      var password = await getData('password');
      if (userId && userId != null) {
        global.userId = userId;
        global.email = email;
        global.password = password;
        navigation.replace('HomeScreen');
      } else {
        navigation.navigate('SetUp');
      }
    } else {
      navigation.navigate('SetUp');
    }
  };
  useEffect(() => {
    checkServerDetails();
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.backgroundImageStyle}>
        {/* <Text style={styles.mainText}>Syva Soft</Text> */}
        <Image source={Images.logo2} style={styles.logoStyle} />
        <Text style={styles.mainText1}>Security App</Text>
        {/* <Text style={styles.textLogoBottm}>LOADER</Text> */}
      </LinearGradient>
    </SafeAreaView>
  );
};
export default SplashScreen;
