import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  firstText: {
    fontSize: windowHeight * 0.022,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: windowHeight * 0.1,
  },
  secondText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: windowHeight * 0.03,
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // marginTop: windowHeight * 0.2,
    paddingVertical: windowWidth * 0.04,
    height: windowHeight * 0.1,
    paddingHorizontal: windowWidth * 0.04,
  },
  bottomContainer: {
    width: windowWidth,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    marginTop: windowHeight * 0.2,
  },
  bottomInnerC: {
    width: windowWidth,
    // marginTop: windowWidth * 0.04,
    // paddingTop: windowWidth * 0.04,
    backgroundColor: 'rgba(235, 235, 245, 0.3)',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  bottomTextC: {
    width: windowWidth,
    flexDirection: 'row',
    backgroundColor: ' rgba(235, 235, 245, 0.3)',
  },
  bottomText: {
    fontSize: windowHeight * 0.024,
    fontWeight: '700',
    paddingTop: windowWidth * 0.04,
  },
  infoText: {
    color: 'rgba(126, 126, 170, 1)',
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
    backgroundColor: ' rgba(235, 235, 245, 0.3)',
    marginBottom: windowHeight * 0.05,
  },
  listC: {
    backgroundColor: 'rgba(235, 235, 245, 0.3)',
    alignItems: 'center',
  },
});
