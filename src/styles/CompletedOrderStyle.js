import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpace20: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '20%',
  },
  rowSpace21: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '12%',
  },
  rowSpace23: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '5%',
  },
  rowSpace24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '0%',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpace41: {
    bottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpace42: {
    bottom: '1.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpacesales: {
    top: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vn: {
    bottom: 80,
  },
  rowSpace2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 20,
  },
  rowSpace1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 70,
  },
  rowSpace11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 60,
  },
  rowSpace555: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '17%',
  },
  rowSpace3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 40,
  },
  rowSpace4: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignSelf:'flex-end'
    // bottom: 10,
  },
  rowSpace25: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignSelf:'flex-end'
    bottom: 30,
  },
  whiteBanner: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 20,
    marginHorizontal: 15,
    paddingHorizontal: '2%',
    paddingVertical: 30,
  },
  whiteBanner11: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 30,
    marginHorizontal: 15,
    paddingHorizontal: '2%',
    paddingVertical: 0,
  },
  whiteBanner97: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 30,
    marginHorizontal: 15,
    paddingHorizontal: '2%',
    paddingVertical: 20,
  },
  orderTxt: {
    fontSize: fontSizes.small,
    color: colors.gray,
    fontWeight: 'bold',
  },
  orderTxt1: {
    right: 10,
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
  },
  grayTxt: {
    fontSize: fontSizes.smaller,
    // top: 50,
    color: colors.gray,
    fontWeight: '500',
  },
  grayTxt33: {
    fontSize: fontSizes.smaller,
    top: 50,
    color: colors.gray,
    fontWeight: '500',
  },
  grayTxt13: {
    fontSize: fontSizes.smaller,
    color: colors.gray,
    fontWeight: '500',
  },
  v1: {
    bottom: 45,
  },
  grayTxt222: {
    fontSize: fontSizes.smaller,
    color: colors.gray,
    fontWeight: '500',
    textAlign: 'left',
  },
  grayTxt55: {
    fontSize: fontSizes.smaller,
    color: colors.gray,
    fontWeight: '500',
    top: 70,
  },
  grayTxt1time: {
    fontSize: fontSizes.smaller,
    color: colors.gray,
    fontWeight: '500',
  },
  date: {
    fontSize: fontSizes.smaller,
    color: colors.black,
    fontWeight: '800',
    lineHeight: 25,
  },
  date66: {
    fontSize: fontSizes.smaller,
    color: colors.black,
    fontWeight: '800',
    lineHeight: 25,
    top: 30,
  },

  whiteBannerentry: {
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  status: {
    fontSize: fontSizes.small,
    color: 'green',
    fontWeight: '500',
    lineHeight: 25,
  },
  cardHeader: {
    backgroundColor: colors.white,
    padding: 0,
    marginHorizontal: -0.9,
    marginTop: -0.9,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 60,
  },
  headerIconView: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 50,
  },
  mainText: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
  ///////==========
  header: {
    flexDirection: 'row',
    padding: 15,
  },
  headerTitle: {
    fontSize: fontSizes.medium,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  logoStyle: {
    height: 120,
    width: 120,
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: 60,
    backgroundColor: colors.lightGray,
  },
  inputMainContainer: {
    marginTop: '5%',
    marginBottom: '15%',
  },
  inputIconView: {
    flexDirection: 'row',
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: colors.white,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: '2%',
  },
  inputContainer: {
    marginLeft: 5,
    color: colors.white,
    fontSize: fontSizes.small,
    width: '77%',
  },
  inputIconAndroid: {
    marginTop: 8,
  },
  btnsviews: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: '10%',
  },
  btn: {
    height: 30,
    width: 130,
    backgroundColor: 'rgb(73,168,83)',
    borderRadius: 3,
    right: 10,
  },
  btnc: {
    height: 30,
    width: 130,
    backgroundColor: 'rgb(242,107,2)',
    borderRadius: 3,
    left: 10,
  },
  btntxt: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    top: 5,
  },
});
export default styles;
