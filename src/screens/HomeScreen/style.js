import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    zIndex: 3,
    flex: 1,
    alignItems: 'center',
  },
  firstText: {
    fontSize: windowHeight * 0.022,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    marginTop: windowHeight * 0.1,
  },
  secondText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '400',
    color: colors.white,
    textAlign: 'center',
    marginTop: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 0.05,
  },
  buttonContainer: {
    width: windowWidth,
    height: windowHeight * 0.15,
    marginTop: windowHeight * 0.13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomIconC: {
    width: windowWidth,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: windowWidth * 0.04,
    height: windowHeight * 0.1,
    paddingHorizontal: windowWidth * 0.04,
  },
  bottomContainer: {
    width: windowWidth,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginTop: windowHeight * 0.2,
  },
  bottomInnerC: {
    width: windowWidth,
    backgroundColor: colors.bgGrey,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  bottomTextC: {
    width: windowWidth,
    flexDirection: 'row',
    backgroundColor: colors.bgGrey,
  },
  bottomText: {
    fontSize: windowHeight * 0.024,
    fontWeight: '700',
    paddingTop: windowWidth * 0.04,
  },
  infoText: {
    color: colors.purpleG,
    fontSize: windowHeight * 0.018,
    fontWeight: '500',
    paddingHorizontal: windowWidth * 0.04,
  },
  bottomButtonC: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgGrey,
    marginBottom: windowHeight * 0.05,
  },
  listC: {
    width: windowWidth * 0.82,

    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 5,
  },
  indicatorC: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
