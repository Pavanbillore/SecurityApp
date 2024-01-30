import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Noti from 'react-native-vector-icons/Ionicons';
import EntryCard from 'react-native-vector-icons/AntDesign';
import LoadingIcon from 'react-native-vector-icons/FontAwesome5';
import Approval from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/HomeScreenStyle';
import Car from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';

const HomeScreen = props => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [appshow, setappshow] = useState(false);
  const [loading, setloading] = useState([]);
  const [billed, setbilled] = useState([]);
  const [overstay, setoverstay] = useState([]);
  const [approved, setapproved] = useState([]);
  const [gatelist, setgatelist] = useState([]);
  const [gate, setgate] = useState(null);
  
  const orderlist = async () => {
    var s = await api.getData('gate');
    if(s){
      setgate(s);
    }
    var sa = await api.getData('userId');
    if(sa){
      console.log(sa);
      setappshow(sa);
    }

    var gatlist = await api.getdata('api/Gate.aspx?action=getlist');
    if(gatlist && gatlist.length > 0){
      setgatelist(gatlist);
      if(!gate){
        setgate(gatlist[0]);
        await api.storeData('gate', gatlist[0]);
      }
    }

    var d = await api.getdata('api/Search.aspx?action=loading');
    if(d && d.length){
      setloading(d);
    }

    var d = await api.getdata('api/EntryRequest.aspx?action=notapprovedlist');
    if(d && d.length){
      setapproved(d);
    }
    
    var d = await api.getdata('api/Search.aspx?action=billed');
    if(d && d.length){
      setbilled(d);
    }
    var d = await api.getdata('api/Search.aspx?action=overstay');
    if(d && d.length){
      setoverstay(d);
    }
  };
  useEffect(()=>{
    orderlist()
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Card containerStyle={styles.cardHeader}>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 3}}
          style={styles.headerView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}>
            <View style={styles.headerIconView}>
              <Icon name="person" color={colors.gradientBlue} size={30} />
            </View>
          </TouchableOpacity>
          <Text style={styles.mainText}>Security App</Text>
          <TouchableOpacity
            onPress={() => {
              //props.navigation.navigate('Notification')
          }}>
            <View style={styles.headerIconView1}>
              <Noti
                name="notifications"
                iconType="simple-line-icon"
                color={colors.gradientBlue}
                size={24}
                style={{alignSelf: 'center'}}
              />
          </View>
          </TouchableOpacity>
        </LinearGradient>
      </Card>
      <View style={styles.subContainer}>
        <View style={styles.tabContainer}>
          <View style={{paddingLeft: 15, marginBottom : 15}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 12}}>Assigned To: </Text>
            <FlatList
              data={gatelist}
              horizontal={true}
              renderItem={({item, index})=> (
                <Button
                  key={index}
                  ViewComponent={LinearGradient} // Don't forget this!
                  onPress={async ()=>{ 
                    setgate(item); 
                    await api.storeData('gate', item);
                  }}
                  linearGradientProps={{
                    colors: (gate && gate.code == item.code) ? ['#9fa9c4', 'green'] : ['lightgray', 'gray'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                  }}
                  buttonStyle={{borderRadius: 10,paddingHorizontal: 15}}
                  containerStyle={{paddingRight: 15}}
                  icon={
                    <Icon
                      name= {(gate && gate.code == item.code) ?  "check-circle" : "circle"}
                      size={15}
                      color="white"
                    />
                  }
                  title={' '+item.name}
                />
              )}
              keyExtractor={item => item.id}
            />
            </View>
        {/*
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TodaysEntryList')}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <Approval
                  type={'ionicon'}
                  // name="watch-later"
                  name="format-horizontal-align-center"
                  color={colors.white}
                  size={35}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Today's Entry</Text>
              </View>
              <Text style={styles.tabButtonTxt}>15</Text>
            </LinearGradient>
          </TouchableOpacity>
          */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('EntryApproved')} style={{display: appshow && appshow.IsSecurityAdmin == 'Y' ? 'flex' : 'none'}}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <Car
                  // onPress={() => props.navigation.navigate('Profile')}
                  type={'fontisto'}
                  name="car-info"
                  color={colors.white}
                  size={30}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Approve Entries</Text>
              </View>
              <Text style={styles.tabButtonTxt}>{approved.length}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TodaysEntryList', {data: 1})}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <Car
                  // onPress={() => props.navigation.navigate('Profile')}
                  type={'fontisto'}
                  name="car-info"
                  color={colors.white}
                  size={30}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Overstay Vehicles List</Text>
              </View>
              <Text style={styles.tabButtonTxt}>{overstay.length}</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('TodaysEntryList', {data: 2})}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <LoadingIcon
                  type={'ionicon'}
                  // name="watch-later"
                  name="truck-loading"
                  color={colors.white}
                  size={27}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Loading Vehicles</Text>
              </View>
              <Text style={styles.tabButtonTxt}>{loading.length}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TodaysEntryList', {data: 3})}>
            <LinearGradient
              colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tabButton}>
              <View style={styles.whiteLine1}>
                <EntryCard
                  type={'ionicon'}
                  // name="watch-later"
                  name="solution1"
                  color={colors.white}
                  size={35}
                />

                <Image source={Images.whiteLine} style={styles.whiteLine} />
                <Text style={styles.tabButtonTxt}>Billed Vehicles </Text>
              </View>
              <Text style={styles.tabButtonTxt}>{billed.length}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer1}>
        <Footer1 active={1} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
