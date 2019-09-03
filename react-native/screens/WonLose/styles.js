import ReactNative, { StyleSheet, Dimensions } from 'react-native';

const colors = {
  grey: '#181818',
  white: '#ffffff',
  black: '#000000',
  blackRgba: 'rgba(24,24,24,.9)',
  whiteLight: 'rgba(255,255,255,.1)',
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.grey,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 70,
  },
  text: {
    color: colors.white,
    fontSize: 17,
  },
  MainTitle: {
    width: '100%',
  },
  subTitle: {
    paddingRight: 60,
    width: '100%',
    textAlign: 'left',
  },
  bold: {
    fontFamily: 'sf-ui-text-bold',
  },
  regular: {
    fontFamily: 'sf-ui-text-regular',
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  round: {
    width: 121,
    height: 121,
    borderRadius: 121 / 2,
    backgroundColor: colors.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    fontFamily: 'sf-ui-text-light',
    alignSelf: 'center',
    marginVertical: 25,
  },
  roundCount: {
    fontSize: 40,
  },
  BtnGrey: {
    position: 'absolute',
    bottom: 30,
  },
  modalWrap: {
    width: '90%',
    backgroundColor: colors.black,
    alignSelf: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: 'absolute',
    top: 150,
  },
  inputsBlock: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inputInfo: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 7.5,
  },
  inputInfoPhone: {
    paddingLeft: 60,
  },
  phoneCode: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'sf-ui-text-regular',
    position: 'absolute',
    paddingLeft: 15,
  },
  inputPhone: {
    width: '100%',
    justifyContent: 'center',
  },
  mainTitleModal: {
    marginBottom: 15,
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
  },
  BtnGreyModalWrap: {
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('window').height - 200,
  },
  BtnGreyModal: {
    width: 'auto',
    paddingHorizontal: 15,
  },
  modalStyle: {
    backgroundColor: colors.blackRgba,
    margin: -25,
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 10,
    height: '100%',
  },
  bthClose: {
    borderRadius: 33,
    backgroundColor: colors.whiteLight,
    paddingVertical: 5,
    paddingHorizontal: 6,
    position: 'absolute',
    right: 50,
    top: 50,
  },
  paddingRight: {
    paddingRight: ReactNative.I18nManager.isRTL ? 0 : 60,
  },
});

export default styles;
