import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {color} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fontSizes} from '../utils/Variables';

// import { Icon } from "react-native-elements";
const data = [
  {label: 'Sales', value: '1'},
  {label: 'Purchase', value: '2'},
  {label: 'Others', value: '3'},
  //   {label: 'Ashok Kushwah', value: '4'},
];

const DropdownEntryRequest = (props) => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      dropdownPosition="bottom"
      style={styles.inputView}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={props.data}
      maxHeight={100}
      labelField="name"
      valueField="code"
      placeholder=" Select Purpose"
      // searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.code);
        props.onChange(item);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownEntryRequest;

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 3,
    marginTop: 7,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  inputView: {
    // flexDirection: 'row',
    height: 50,
    borderWidth: 0.7,
    borderRadius: 6,
    borderColor: colors.lightGray,
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: '2%',
  },

  item: {
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: fontSizes.smaller,
    fontWeight: '500',
    color: colors.gray,
  },
  placeholderStyle: {
    color: colors.gray,
    fontSize: fontSizes.smaller,
  },
  selectedTextStyle: {
    color: colors.blue,
    fontSize: fontSizes.smaller,
  },
  iconStyle: {
    width: 18,
    height: 18,
    tintColor: colors.gray,
  },
});
