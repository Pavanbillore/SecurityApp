import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, fontSizes} from '../utils/Variables';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    marginHorizontal: 5,
  },
  mainText: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
  cardHeader: {
    backgroundColor: colors.blue,
    padding: 0,
    marginHorizontal: -0.9,
    marginTop: -0.9,
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    // zIndex: 40,
    flex: 1,
    width: width,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
  },
  headerIconView: {
    backgroundColor: colors.white,
    padding: 7,
    borderRadius: 50,
  },
  headerIconView1: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  searchScanBtnView: {
    flexDirection: 'row',
    marginTop: '2%',
    marginBottom: '2%',
    marginHorizontal: '3%',
    justifyContent: 'space-between',
  },
  searchInputIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  serchInputStyle: {
    width: '80%',
    color: colors.black,
  },
  scanButton: {
    paddingVertical: '11%',
    paddingHorizontal: '11%',
    borderRadius: 10,
  },
  scanButtonTxt: {
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
  upTabMainView: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    marginHorizontal: '3%',
  },
  pendingTabView: {
    width: '50%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  completedTabView: {
    width: '50%',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  pendingTabText: {
    textAlign: 'center',
    padding: 10,
    fontSize: fontSizes.medium,
  },
  completedTabText: {
    textAlign: 'center',
    padding: 10,
    fontSize: fontSizes.medium,
  },
  cardList: {
    marginHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 10,
    padding: 0,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  listLeftRightLine: {
    marginBottom: '85%',
  },
  listTxtNoView: {
    flexDirection: 'row',
    marginBottom: 5,
    // width: '60%',
    alignSelf: 'center',
  },
  listHeadingText: {
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: 'bold',
    width: '35%',
    marginLeft: 25,
  },
  listNumber: {
    fontSize: fontSizes.small,
    color: colors.black,
    marginLeft: 10,
    fontWeight: 'bold',
    width: '45%',
  },
  listButton: {
    marginTop: 5,
    backgroundColor: colors.white,
    marginHorizontal: 70,
    borderRadius: 5,
    elevation: 5,
    shadowColor: colors.white,
    shadowRadius: 5,
    shadowOffset: {height: 0.5, width: 0.5},
  },
  listButtonTxt: {
    alignSelf: 'center',
    fontSize: fontSizes.small,
    fontWeight: 'bold',
    padding: 9,
    color: colors.white,
  },
  linearGradientHeader: {
    borderRadius: 5,
    paddingVertical: 20,
  },
  completedImgStyle: {
    marginTop: 5,
    height: 45,
    width: 115,
    alignSelf: 'center',
  },
  linearGradient: {
    borderRadius: 10,
    paddingVertical: 20,
  },
  centerText: {
    flex: 1,
    fontSize: fontSizes.medium,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: colors.black,
  },
  buttonText: {
    fontSize: fontSizes.medium,
    color: colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonTouchableCancel: {
    padding: 10,
    backgroundColor: colors.red,
    width: '30%',
    borderRadius: 10,
  },
  buttonTouchable: {
    padding: 10,
    backgroundColor: 'green',
    width: '30%',
    borderRadius: 10,
  },
  scanButtonView: {
    marginTop: '20%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  refreshBtn: {
    backgroundColor: colors.gradientMilkyBlue,
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'flex-end',
    width: 65,
    height: 65,
    borderRadius: 50,
    right: 5,
  },
  refresh: {
    color: colors.white,
    fontWeight: 'bold',
    top: '32%',
    textAlign: 'center',
  },
  updateTxt: {
    color: colors.black,
    alignSelf: 'center',
  },
  pendingTxt: {
    color: colors.orange,
    alignSelf: 'center',
  },
  //===========
  tabButton: {
    paddingVertical: '6%',
    marginTop: '3%',
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    // alignSelf: 'center',

    borderRadius: 12,
    marginHorizontal: '3%',
  },
  tabButtonTxt: {
    fontSize: fontSizes.small,
    fontWeight: '500',
    color: colors.white,
    marginLeft: 20,
  },
  tabContainer: {
    marginTop: '5%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  whiteLine: {
    resizeMode: 'contain',
    marginLeft: 25,
  },
  whiteLine1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
