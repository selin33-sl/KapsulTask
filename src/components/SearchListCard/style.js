import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 0.82,
    height: windowHeight * 0.05,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.02,
    borderBottomWidth: 1,
    borderColor: 'rgba(168, 168, 168, 1)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    fontSize: windowHeight * 0.02,
    color: 'rgba(60, 60, 67, 0.6)',
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
});
