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
  ScrollView,
} from 'react-native';
import {Icon, Card, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from '../styles/SalesOrderStyle';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';
import CustomTextInput from '../component/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../component/CustomButton';
import Dropdown1 from './Dropdown1';
import DropdownEntryRequest from './DropdownEntryRequest';
import { ToastAndroid } from 'react-native';
const EntryRequest = props => {
  const [server, setServer] = useState('');
  const [gatelist, setgatelist] = useState([]);
  const [gate, setgate] = useState(null);
  const [fastage, setfastage] = useState(null);
  const [purpose, setpurpose] = useState(null);
  const [purposelist, setpurposelist] = useState([]);
  const [remark, setremark] = useState('');
  const [vehicle, setvehicle] = useState('');
  const [datefrom, setDatefrom] = useState('');
  const [dateto, setDateto] = useState('');
  const datalist = async () => {
    var gatlist = await api.getdata('api/Gate.aspx?action=getlist');
    if(gatlist && gatlist.length > 0){
      setgatelist(gatlist);
    }
    var gatlist = await api.getdata('api/EntryPurpose.aspx?action=getlist');
    if(gatlist && gatlist.length > 0){
      setpurposelist(gatlist);
    }
  };
  const getfastagelist = async (d) => {
    var dlist = await api.getdata('api/FastagReader.aspx?action=gettagid&gateno='+d.code+'&direction=ENTRY');
    if(dlist && dlist.length > 0){
      setfastage(dlist[0].currenttagid);
    }
  };
  const createentry = async () => {
    var d = new Date();
    var datenow = api.formatDate(d);
    let formdata = new FormData();
    formdata.append("action", 'create');
    formdata.append("entrygateno", gate.code);
    formdata.append("entrytime", datenow);
    formdata.append("rfidtag", fastage && fastage != '' ? fastage : Math.random(1000, 9999));//fastage);
    formdata.append("vehicleno", vehicle);
    formdata.append("movementtype", purpose.code);
    formdata.append("remarks", remark);
    var dlist = await api.postdata('api/EntryRequest.aspx',  formdata);
    if(dlist && dlist[0] && dlist[0].Status == 'Success'){
      ToastAndroid.showWithGravityAndOffset('Added Successfully', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
      props.navigation.goBack();
    }else if(dlist.Message){
      ToastAndroid.showWithGravityAndOffset(dlist.Message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }else{
      ToastAndroid.showWithGravityAndOffset('Something went wrong try again', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }
  }
  useEffect(()=>{
    datalist();
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.MainView}>
          {/* <View style={styles.headerView}> */}
          <View style={styles.headerView}>
            <View>
              <Icon
                onPress={() => props.navigation.goBack()}
                name="keyboard-backspace"
                color={colors.white}
                size={30}
              />
            </View>
            <Text style={styles.headerText}>Entry Request</Text>
            <View style={{width: '5%'}}></View>
          </View>

          <View style={styles.backgroundStyle}>
            <View style={styles.inputMainContainer}>
              <View style={styles.rowDirection3}>
                <FlatList
                  data={gatelist}
                  horizontal={true}
                  renderItem={({item, index})=> (
                    <Button
                      key={index}
                      ViewComponent={LinearGradient} // Don't forget this!
                      onPress={()=>{ setgate(item); getfastagelist(item); }}
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
              <View style={styles.rowDirection3}>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Date </Text>
                  <View style={styles.inputView0}>
                    <TextInput
                      style={styles.modalinput}
                      placeholder="03-05-2022"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDatefrom(TextInput)}
                      value={datefrom}
                      keyboardType={'number-pad'}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Time</Text>
                  <View style={styles.inputView0}>
                    <TextInput
                      style={styles.modalinput}
                      placeholder="10:00 AM"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDateto(TextInput)}
                      value={dateto}
                      keyboardType={'number-pad'}
                    />
                  </View>
                </View>
              </View>*/ }
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Fastag ID</Text>
                <View style={styles.inputView}>
                  {/* <Text>email</Text> */}

                  <CustomTextInput
                    placeholder="Fastag ID"
                    placeholderTextColor={colors.gray}
                    onChangeText={TextInputValue => {}}
                    editable={true}
                    value={fastage}
                    keyboardType={'number-pad'}
                  />
                </View>
              </View>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Vehicle No</Text>
                <View style={styles.inputView}>
                  {/* <Text>email</Text> */}

                  <CustomTextInput
                    placeholder="Enter Vehicle No"
                    placeholderTextColor={colors.gray}
                    onChangeText={TextInputValue => setvehicle(TextInputValue)}
                    value={vehicle}
                    keyboardType={'number-pad'}
                  />
                </View>
              </View>
              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Purpose</Text>
                {purposelist.length > 0 ? (
                  <DropdownEntryRequest 
                    data = {purposelist}
                    onChange = {d => {setpurpose(d);}}
                  />
                ) : null}
              </View>

              <View style={styles.hight}>
                <Text style={styles.headingTxt}>Remarks</Text>
                <View style={styles.inputView}>
                  {/* <Text>email</Text> */}

                  <CustomTextInput
                    placeholder="Enter Remarks"
                    placeholderTextColor={colors.gray}
                    onChangeText={TextInputValue => setremark(TextInputValue)}
                    value={remark}
                    keyboardType={'number-pad'}
                  />
                </View>
              </View>
              <View style={{marginTop: 30}}>
                <CustomButton
                  onPress={() => createentry()}
                  title="Request for Approval"
                  style={{color: 'rgb(182,215,168)'}}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
      <View style={styles.footer1}>
        <Footer1 active={3} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default EntryRequest;
