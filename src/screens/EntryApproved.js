import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  FlatList,
  ToastAndroid
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Icon, Card} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Footer1 from './Footer1';
import api from '../utils/Api';
import {Images} from '../utils/Images';
import styles from '../styles/CompletedOrderStyle';
import {colors} from '../utils/Variables';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';

const EntryApproved = props => {
  const [checked, setChecked] = React.useState(0);
  const [gatelist, setgatelist] = useState([]);

  const datalist = async () => {
    var gatlist = await api.getdata('api/EntryRequest.aspx?action=notapprovedlist');
    if(gatlist && gatlist.length > 0){
      var d = [];
      gatlist.forEach(element => {
        element.checked = false;
        d.push(element)
      });
      setgatelist(d);
    }else{
      setgatelist([]);
    }
  }
  
  const approved = async (d) => {
    var gatlist = await api.getdata(d.checked ? 'api/EntryRequest.aspx?action=approverequest&id='+d.id+'&onetimeapproval=Y' : 'api/EntryRequest.aspx?action=approverequest&id='+d.id+'&onetimeapproval=N');
    console.log(gatlist)
    if(gatlist && gatlist[0] && gatlist[0].Status == 'Success'){
      ToastAndroid.showWithGravityAndOffset('Approved Successfully', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }else{
      ToastAndroid.showWithGravityAndOffset('Something went wrong try again', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
    }
    datalist();
  }

  useEffect(() => {
    datalist();
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

        <Text style={styles.mainText}>Entry Approval</Text>
        <View style={{width: '5%'}}></View>
        {/* </View> */}
      </LinearGradient>

      <LinearGradient
        colors={[colors.gradientBlue, colors.gradientMilkyBlue]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 3}}
        style={styles.backgroundStyle}>
        {gatelist && gatelist.length == 0 && (
          <View style={styles.whiteBanner}>
            <View style={styles.whiteBanner97}>
                  <Text style={[styles.btntxt, {color: 'black'}]}>No data found</Text>
            </View>
          </View>
        )}

        <FlatList
          data={gatelist}
          renderItem={({item, index}) => (
            <View style={styles.whiteBanner}>
              <View style={styles.whiteBanner97}>
                <View style={styles.rowSpace20}>
                  <Text style={[styles.grayTxt, {display: 'none'}]}>
                    Index:- <Text style={[styles.date]}> {checked}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Entry no:- <Text style={styles.date}> {item.entrygateno}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Date:- <Text style={styles.date}> {item.entrytime}</Text>
                  </Text>
                </View>

                <View style={styles.rowSpace21}>
                  <Text style={styles.grayTxt}>
                    Fastag ID:-
                    <Text style={styles.date}> {item.rfidtag}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Vehicle No:-{' '}
                    <Text style={styles.date}> {item.vehicleno}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace23}>
                  <Text style={styles.grayTxt}>
                    Purpose:-<Text style={styles.date}> {item.movementtype}</Text>
                  </Text>
                  <Text style={styles.grayTxt}>
                    Remarks:- <Text style={styles.date}> {item.remarks}</Text>
                  </Text>
                </View>
                <View style={styles.rowSpace24}>
                  <Text style={styles.grayTxt}>
                    Assign Business Partner:-
                    <Text style={styles.date}>
                      {' '}
                      {item.assignbusinesspartner}
                    </Text>
                  </Text>
                </View>
                <View style={styles.rowSpace25}>
                  <Text style={styles.grayTxt33}>One time approval:-</Text>
                  <View style={{top: 45, left: 10}}>
                    <Checkbox
                      status={item.checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        var g = gatelist;
                        g[index].checked = !g[index].checked;
                        setgatelist(g);
                        var c = checked+1;
                        setChecked(c);
                      }}
                      color={'green'}
                      uncheckColor={'red'}
                    />
                  </View>
                </View>
                <View style={styles.btnsviews}>
                  <TouchableOpacity style={[styles.btn, {backgroundColor : 'rgb(73,168,83)'}]} onPress={()=>{
                    // if(item.checked){
                      approved(item)
                    // }else{
                    //   ToastAndroid.showWithGravityAndOffset('Please verify first', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
                    // }
                  }}>
                    <Text style={styles.btntxt}>Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnc}>
                    <Text style={styles.btntxt}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </LinearGradient>
      <View style={styles.footer1}>
        <Footer1 active={5} navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default EntryApproved;
