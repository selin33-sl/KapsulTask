import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    marginHorizontal: windowWidth * 0.02,
    marginTop: windowHeight * 0.02,
    justifyContent: 'center',
  },
  searchBar: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.82,
    borderRadius: 8,
    paddingLeft: windowWidth * 0.03,
    fontSize: windowHeight * 0.02,
    backgroundColor: colors.white,
    color: colors.grey,
  },

  clearIcon: {
    position: 'absolute',
    right: windowWidth * 0.04,
  },
});
