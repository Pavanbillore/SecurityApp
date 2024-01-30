import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  FlatList,
  TextInput,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import QRCodeScanner from 'react-native-qrcode-scanner';
import CustomButton from '../component/CustomButton';
import CustomTextInput from '../component/CustomTextInput';
import styles from '../styles/ShipmentStyle';
import {Images} from '../utils/Images';
import {colors} from '../utils/Variables';
import api from '../utils/Api';
import Footer1 from './Footer1';
import Scan from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from 'react-native-paper';
const ValidateExit = props => {
  const [serchByNumber, setSearchByNumber] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(0);
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [datefrom, setDatefrom] = useState('');
  const [dateto, setDateto] = useState('');
  const [orderno, setOrderno] = useState(true);
  const [site, setSite] = useState('');
  const [material, setMaterial] = useState(true);
  const [gatelist, setgatelist] = useState([]);
  const [gate, setgate] = useState(null);

  const searchdata = async (text) => {
    var gatlist = await api.getdata('api/Search.aspx?action=search&searchtext='+text);
    if(gatlist && gatlist.length > 0){
      // var a = [];
      // gatlist.forEach(element => {
      //   if(element.exitauthorized == 'N' && element.verified == 'N'){
      //     element.checked = false;
      //     a.push(element);
      //   }
      // });
      setgatelist(gatlist);
    }else{
      setgatelist([]);
    }
  }
  const approved = async (d) => {
    var url = 'api/Search.aspx?action=authexit&id='+d.id+'&exitgate='+gate.code;
    var gatlist = await api.getdata(url);
    if(gatlist && gatlist[0] && gatlist[0] == 'Success'){
      ToastAndroid.showWithGravityAndOffset('Validated Successfully', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }else{
      ToastAndroid.showWithGravityAndOffset('Something went wrong try again', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }
    setgatelist([]);
  }
  const orderlist = async () => {
    var s = await api.getData('gate');
    if(s){
      setgate(s);
    }
  }
  useEffect(()=>{
    orderlist()
  }, [])

  
  return !scan ? (
    <SafeAreaView style={styles.mainContainer}>
      <Card containerStyle={styles.cardHeader}>
        <LinearGradient
          colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 3}}
          style={styles.headerView}>
          {/* <View style={styles.headerView}> */}
          <View>
            <Icon
              onPress={() => props.navigation.goBack()}
              name="keyboard-backspace"
              color={colors.white}
              size={30}
            />
          </View>
          <Text style={styles.mainText}>Validate Exit</Text>
          <View style={{width: '5%'}}></View>
          {/* </View> */}
        </LinearGradient>
      </Card>
      <View style={styles.subContainer}></View>
      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.backgroundStyle}>
        <View style={[styles.whiteBanner, {marginTop: 10}]}>
          <View style={[styles.whiteBanner1, {bottom: '1%'}]}>
            <View style={styles.searchScanBtnView}>
              <View style={styles.searchInputIconView}>
                <TextInput
                  style={styles.serchInputStyle}
                  placeholder="Search Bill No / Vehicle No"
                  placeholderTextColor={colors.gray}
                  onChangeText={TextInput => {setSearchByNumber(TextInput); searchdata(TextInput)} }
                  value={serchByNumber}
                />
                <TouchableOpacity
                  // onPress={() => searchdata(serchByNumber)}
                  style={{alignSelf: 'center'}}
                  // onPress={() => setModalVisible(true)}
                >
                  <Icon name="search" color={colors.gray} size={25} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setScan(true)}>
                <Scan name="qrcode-scan" size={30} style={styles.scanicon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          data={gatelist}
          renderItem={({item, index}) => (
            <View style={[styles.whiteBanner]}>
              <View style={[styles.whiteBanner1, {height: 350, paddingTop: 15}]}>

                <View style={styles.rowSpace21}>
                  <Text style={[styles.grayTxt, {display: 'none'}]}>
                    Index:-
                    <Text style={styles.date}> {checked2}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Vehhicle No:-
                    <Text style={styles.date}> {item.vehicleno}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    DC No:-{' '}
                    <Text style={styles.date}> {item.dcno}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Product:-{' '}
                    <Text style={styles.date}> {item.productname}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Party:-{' '}
                    <Text style={styles.date}> {item.partyname}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Entry time:-{' '}
                    <Text style={styles.date}> {item.entrytime}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  1st Weight Time:-{' '}
                    <Text style={styles.date}> {item.firstweighttime}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  2nd Weight Time:-{' '}
                    <Text style={styles.date}> {item.secondweighttime}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Exit Time:-{' '}
                    <Text style={styles.date}> {item.exittime}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Stay Time:-{' '}
                    <Text style={styles.date}> {item.staytime}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Entry Gate:-{' '}
                    <Text style={styles.date}> {item.entrygateno}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Exit Gate:-{' '}
                    <Text style={styles.date}> {item.exitgateno}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                  Purpose:-{' '}
                    <Text style={styles.date}> {item.movementtype}</Text>
                  </Text>
                  {/*
                  <Text style={styles.grayTxt}>
                  Verified:-{' '}
                    <Text style={styles.date}> {item.verified}</Text>
                  </Text>
                  */}
                </View>
                {item.exitauthorized == 'N' && (
                  <View>
                    <View style={styles.rowSpace1}>
                      <View style={styles.rowDirection2}>
                        <Text style={styles.orderTxt}>Verified</Text>
                        <View style={{left: 10}}>
                          <Checkbox
                            status={item.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                              var g = gatelist;
                              g[index].checked = !g[index].checked;
                              setgatelist(g);
                              var c = checked2+1;
                              setChecked2(c);
                            }}
                            color={'green'}
                            uncheckColor={'red'}
                          />
                        </View>
                      </View>
                    </View>
                    
                    <View style={styles.btnsviews}>
                      <TouchableOpacity style={[styles.btnc1, {backgroundColor : item.checked ? 'rgb(230,145,56)' : 'rgba(230,145,56, 0.5)'}]} onPress={()=>{
                        if(item.checked){
                          approved(item)
                        }else{
                          ToastAndroid.showWithGravityAndOffset('Please verify first', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                        }
                      }}>
                        <Text style={styles.btntxt}>Authorize Exit</Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                )}
              </View>
            </View>
          )}
        />
      </LinearGradient>

      <View style={styles.footer1}>
        <Footer1 active={4} navigation={props.navigation} />
      </View>
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContainer1}>
              <View style={styles.rowDirection}>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Date From</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDatefrom(TextInput)}
                      value={datefrom}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Date To</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setDateto(TextInput)}
                      value={dateto}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.rowDirection}>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Order No</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setOrderno(TextInput)}
                      value={orderno}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Site</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setSite(TextInput)}
                      value={site}
                    />
                  </View>
                </View>
                <View style={styles.spaces}></View>
                <View style={styles.spaces1}>
                  <Text style={styles.formTxt}>Material</Text>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.modalinput}
                      // placeholder="Search here"
                      placeholderTextColor={colors.gray}
                      onChangeText={TextInput => setMaterial(TextInput)}
                      value={material}
                    />
                  </View>
                </View>
              </View>
              <CustomButton
                onPress={() => setModalVisible(!modalVisible)}
                title="Search"
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  ) : (
    <QRCodeScanner
      // onRead={onSuccess}
      ref={scanner}
      reactivate={true}
      showMarker={true}
      onRead={(e)=>{
        if(e.data){
          if(e.type == 'CODE_39'){
            e.data = e.data.split('/O').join('/');
          }
          var d = e.data;
          setScan(false);
          setSearchByNumber(d);
          searchdata(d);
        }
      }}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      bottomContent={
        <View style={styles.scanButtonView}>
          <TouchableOpacity
            style={styles.buttonTouchableCancel}
            onPress={() => setScan(false)}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => scanner.current.reactivate()}>
            <Text style={styles.buttonText}>CAPTURE</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};
export default ValidateExit;
