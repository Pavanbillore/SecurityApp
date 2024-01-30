import {Alert} from 'react-native';
import X2JS from 'x2js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const serverurl = 'https://hta.syvasoft.in/';
// const serverurl2 = 'http://localhost/SecurityAPI/';
class Api {
  logout = async () => {
    var o = [];
    // var collectionStr = await this.getData(global.userId);
    // if (collectionStr && collectionStr != null) {
    //   collectionStr.forEach(async s => {
    //     if (!s.update) {
    //       o.push(s);
    //     }
    //   });
    // }
    // await api.storeData(global.userId, o);
    var l = await this.removeValue('userId');
    return l ? true : false;
  };
  formatDate = (dateVal) => {
    var newDate = new Date(dateVal);

    var sMonth = this.padValue(newDate.getMonth() + 1);
    var sDay = this.padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = this.padValue(newDate.getMinutes());
    var sAMPM = "AM";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
    }
    else if (iHourCheck === 0) {
        sHour = "12";
    }

    sHour = this.padValue(sHour);
    return sYear + "-" + sMonth + "-" + sDay + " " + sHour + ":" + sMinute + " " + sAMPM;
  }
  padValue = (value) => {
    return (value < 10) ? "0" + value : value;
  }
  getcurrentdate = () => {
    var d = new Date();
    var date_format_str =
      d.getFullYear().toString() +
      '-' +
      ((d.getMonth() + 1).toString().length == 2
        ? (d.getMonth() + 1).toString()
        : '0' + (d.getMonth() + 1).toString()) +
      '-' +
      (d.getDate().toString().length == 2
        ? d.getDate().toString()
        : '0' + d.getDate().toString()) +
      ' ' +
      (d.getHours().toString().length == 2
        ? d.getHours().toString()
        : '0' + d.getHours().toString()) +
      ':' +
      (d.getMinutes().toString().length == 2
        ? d.getMinutes().toString()
        : '0' + d.getMinutes().toString()) +
      ':00';
    return date_format_str;
  };
  removeValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
      console.log(e);
    }
  };
  storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (e) {
      return false;
    }
  };
  getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return false;
    }
  };
  getpendingslips = async () => {
  };
  orderlist = async () => {
  };
  login = async (username, password) => {
    try {
      var data =
        `<_0:ModelCRUDRequest xmlns:_0="http://idempiere.org/ADInterface/1_0">
        <_0:ModelCRUD>
        <_0:serviceType>Login</_0:serviceType>
        <_0:TableName></_0:TableName>
        <_0:RecordID>0</_0:RecordID>
        <_0:DataRow>
        <!--Zero or more repetitions:-->
        <_0:field column="IsActive">
        <_0:val>Y</_0:val>
        </_0:field>
        <_0:field column="Name">
        <_0:val>` +
        username +
        `</_0:val>
        </_0:field>
        <_0:field column="Password">
        <_0:val>` +
        password +
        `</_0:val>
        </_0:field>
        </_0:DataRow>
        </_0:ModelCRUD>
        <_0:ADLoginRequest>
        <_0:user>` +
        username +
        `</_0:user>
        <_0:pass>` +
        password +
        `</_0:pass>
        <_0:lang>en_IN</_0:lang>
        <_0:ClientID>${global.collectionStr.client}</_0:ClientID>
        <_0:RoleID>${global.collectionStr.role}</_0:RoleID>
        <_0:stage>2</_0:stage>
        </_0:ADLoginRequest>
        </_0:ModelCRUDRequest>`;
      var url =
      global.collectionStr.server.toLowerCase() + 'ADInterface/services/rest/model_adservice/query_data';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml',
        },
        body: data,
      });
      const responseJson = await response.text();
      if (responseJson) {
        var x2js = new X2JS();
        var dt = x2js.xml2js(responseJson);
        if (dt.WindowTabData && dt.WindowTabData.Error) {
          Alert.alert(dt.WindowTabData.Error.__text);
          return false;
        } else if (dt.WindowTabData.DataSet) {
          var user = {AD_User_ID: null, Name: null, C_BPartner_ID: null};
          console.log(dt.WindowTabData.DataSet.DataRow);
          if(dt.WindowTabData.DataSet.DataRow.field.length > 0){
            dt.WindowTabData.DataSet.DataRow.field.forEach(e => {
              if (e.val.__text) {
                e._column == 'AD_User_ID'
                  ? (user.AD_User_ID = e.val.__text)
                  : null;
                e._column == 'IsSecurityAdmin' ? (user.IsSecurityAdmin = e.val.__text) : null;
                e._column == 'Name' ? (user.Name = e.val.__text) : null;
                e._column == 'C_BPartner_ID'
                  ? (user.C_BPartner_ID = e.val.__text)
                  : null;
              }
            });
          }else{
            var e = dt.WindowTabData.DataSet.DataRow.field;
            if (e.val.__text) {
              e._column == 'AD_User_ID'
                ? (user.AD_User_ID = e.val.__text)
                : null;
              e._column == 'IsSecurityAdmin' ? (user.IsSecurityAdmin = e.val.__text) : null;
              e._column == 'Name' ? (user.Name = e.val.__text) : null;
              e._column == 'C_BPartner_ID'
                ? (user.C_BPartner_ID = e.val.__text)
                : null;
            }
          }
          return user;
        }
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Please check server details.');
      return false;
    }
  };
  getdata = async (urls) => {
    try {
      var url =
      global.collectionStr.Security.toLowerCase() + urls;
      const response = await fetch(url, {
        method: 'GET',
      });
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson) {
        return responseJson;
      }else{
        return false;
      }
    } catch (e) {
      Alert.alert('Please check server details.');
      return false;
    }
  };
  postdata = async (urls, data) => {
    try {
      var url =
      global.collectionStr.Security.toLowerCase() + urls;
      const response = await fetch(url, {
        method: 'POST',
        body: data
      });
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson) {
        return responseJson;
      }else{
        return false;
      }
    } catch (e) {
      Alert.alert('Please check server details.');
      return false;
    }
  };
}
const api = new Api();
export default api;
