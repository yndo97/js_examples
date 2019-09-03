import ReactNative, { StyleSheet } from 'react-native';

const colors = {
  grey: '#181818',
  greyLight: '#5A6664',
  black: '#000000',
  white: '#fff',
};

const s = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: colors.grey,
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingBottom: 30,
  },

  MainTitle: {
    paddingHorizontal: 25,
    width: '100%',
  },

  imgBg: {
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    transform: [{ scaleX: ReactNative.I18nManager.isRTL ? -1 : 1 }],
  },

  bold: {
    fontFamily: 'sf-ui-text-bold',
  },

  gameRulesRow: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.black,
  },

  gameRulesRowText: {
    color: colors.white,
    fontSize: 17,
  },

  text: {
    color: colors.white,
    fontSize: 17,
    paddingLeft: 5,
    fontFamily: 'sf-ui-text-regular',
  },

  tournamentTable: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '90%',
    backgroundColor: colors.black,
    borderRadius: 20,
    alignSelf: 'center',
  },

  tournamentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.white,
    marginLeft: 23,
    marginRight: 14,
  },

  absolute: {
    position: 'absolute',
    right: 0,
  },

  close: {
    position: 'absolute',
    right: 10,
    top: 35,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: colors.greyLight,
  },
  IconRight: {
    transform: [{ scaleX: ReactNative.I18nManager.isRTL ? -1 : 1 }],
  },
  tournamentTableText: {
    marginBottom: 20,
    textAlign: 'left',
  },

});

export default s;
