import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    paddingHorizontal: 25,
    paddingBottom: 15,
  },
  wrap: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    padding: 20,
    height: 300,
    borderRadius: 25,
    marginBottom: 0,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'sf-ui-text-bold',
    alignSelf: 'flex-start',
    width: '100%',
  },
  rulesText: {
    color: '#fff',
    fontSize: 15,
    paddingRight: 14,
    textAlign: 'left',
    fontFamily: 'sf-ui-text-light',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  MainTitle: {
    marginBottom: 0,
  },
  MainSubTitle: {
    marginBottom: 0,
  },
});

export default s;
