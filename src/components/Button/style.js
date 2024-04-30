import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 0.82,
    height: windowHeight * 0.07,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderWidth: 2,
  },
  text: {
    fontSize: windowHeight * 0.022,
    fontWeight: '600',
  },
  arrow: {
    marginLeft: windowWidth * 0.02,
  },
});
