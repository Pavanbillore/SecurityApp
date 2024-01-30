import React, {useState, useEffect} from 'react';
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

const TodaysEntryList = props => {
  const [sc, setsc] = useState(1);
  const [loading, setloading] = useState([]);
  const orderlist = async (s) => {
    var t = s == 1 ? 'overstay' : s == 2 ? 'loading' : s == 3 ? 'billed' : 'approvedlist';
    if(s == 4){
      var url = 'api/EntryRequest.aspx?action='+t;
    }else{
      var url = 'api/Search.aspx?action='+t;
    }
    console.log(url);
    var d = await api.getdata(url);
    if(d && d.length){
      setloading(d);
    }
  };
  useEffect(() => {
    if(props.route.params && props.route.params.data){
      setsc(props.route.params.data)
      orderlist(props.route.params.data)
    }
  }, [])
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

        <Text style={styles.mainText}>{sc == 1 ? 'Overstay Vehicles' : sc == 2 ?  'Loading Vehicles' : sc == 3 ? 'Billed Vehicles' : 'Approved Entry'} List</Text>
        <View style={{width: '5%'}}></View>
        {/* </View> */}
      </LinearGradient>

      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.backgroundStyle}>
        <FlatList
          data={loading}
          renderItem={({item}) => (
            <View style={styles.whiteBanner11}>
              <View style={styles.whiteBannerentry}>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  Vehhicle No:- <Text style={styles.date}>{item.vehicleno}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  DC No:- <Text style={styles.date}>{item.dcno}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  Party:- <Text style={styles.date}>{item.partyname}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  Product:- <Text style={styles.date}>{item.productname}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  Entry Time:- <Text style={styles.date}>{item.entrytime}</Text>
                  </Text>
                </View>
                {sc != 2 && (
                  <View style={styles.rowSpace41}>
                    <Text style={styles.grayTxt1time}>
                    Billed Time :- <Text style={styles.date}>{item.secondweighttime}</Text>
                    </Text>
                  </View>
                )}
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  Waiting Time :- <Text style={styles.date}>{item.waitingtime}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace41}>
                  <Text style={styles.grayTxt1time}>
                  Entry Gate:- <Text style={styles.date}>{item.entrygateno}</Text>
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
export default TodaysEntryList;
