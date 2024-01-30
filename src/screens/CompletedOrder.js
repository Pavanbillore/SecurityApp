import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/CompletedOrderStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const CompletedOrder = props => {
  const data = [
    {
      id: '1',
      enumber: '101',
      date: '1-Apr-2022 : 10 AM',
      fastageid: '123',
      deliveredQty: 'MP150',
      material: 'Sales',
      deliverySite: 'Hosur',
      BalanceQty: 'Vendor',
      status: 'Completed',
    },
    {
      id: '2',
      enumber: '102',
      date: '1-Apr-2022 : 10 AM',
      fastageid: '123',
      deliveredQty: 'MP150',
      material: 'Sales',
      deliverySite: 'Hosur',
      BalanceQty: 'Vendor',
      status: 'Completed',
    },
    {
      id: '3',
      enumber: '103',
      date: '1-Apr-2022 : 10 AM',
      fastageid: '123',
      deliveredQty: 'MP150',
      material: 'Sales',
      deliverySite: 'Hosur',
      BalanceQty: 'Vendor',
      status: 'Completed',
    },
    {
      id: '4',
      enumber: '104',
      date: '1-Apr-2022 : 10 AM',
      fastageid: '123',
      deliveredQty: 'MP150',
      material: 'Sales',
      deliverySite: 'Hosur',
      BalanceQty: 'Vendor',
      status: 'Completed',
    },
    {
      id: '5',
      enumber: '105',
      date: '1-Apr-2022 : 10 AM',
      fastageid: '123',
      deliveredQty: 'MP150',
      material: 'Sales',
      deliverySite: 'Hosur',
      BalanceQty: 'Vendor',
      status: 'Completed',
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.headerView}>
        {/* <View style={styles.headerView}> */}

        <Icon
          onPress={() => props.navigation.goBack()}
          name="keyboard-backspace"
          color={colors.white}
          size={30}
        />

        <Text style={styles.mainText}>Overstay Vehicle List</Text>
        <View style={{width: '5%'}}></View>
        {/* </View> */}
      </LinearGradient>

      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.backgroundStyle}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.whiteBanner11}>
              <View style={styles.whiteBannerentry}>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                    Entry No:- <Text style={styles.date}>{item.enumber}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Date:- <Text style={styles.date}> {item.date}</Text>
                  </Text>
                </View>

                <View style={styles.rowSpace42}>
                  <Text style={styles.grayTxt}>
                    Fasted Id:-
                    <Text style={styles.date}> {item.fastageid}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Vehicle Number:-{' '}
                    <Text style={styles.date}> {item.deliveredQty}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpacesales}>
                  <Text style={styles.grayTxt13}>
                    Purpose:-<Text style={styles.date66}> {item.material}</Text>
                  </Text>
                  <Text style={styles.grayTxt222}>
                    Remarks:- <Text style={styles.status}> {item.status}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace555}>
                  <Text style={styles.grayTxt55}>
                    Assign Bussiness Partner:-
                    <Text style={styles.date}> {item.BalanceQty}</Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};
export default CompletedOrder;
