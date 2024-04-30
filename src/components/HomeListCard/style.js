import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: windowHeight * 0.02,
    borderRadius: 22,
    elevation: 2,
  },
  backImgC: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
    backgroundColor: 'transparent',
  },
  backImg: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
    backgroundColor: 'pink',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  cardNameC: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.03,
    backgroundColor: 'rgba(127, 86, 217, 1)',
    borderTopRightRadius: 3.44,
    borderBottomRightRadius: 3.44,
    position: 'absolute',
    bottom: windowHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNameText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
  underContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.8,
    height: windowHeight * 0.05,
    marginTop: windowHeight * 0.03,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playIconC: {
    width: 'auto',
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoNumberT: {
    fontSize: windowHeight * 0.018,
    color: 'rgba(31, 31, 57, 1)',
    fontWeight: '500',
    marginLeft: windowWidth * 0.02,
  },
  trainingNameT: {
    fontSize: windowHeight * 0.024,
    color: 'rgba(6, 36, 27, 1)',
    fontWeight: '700',
    width: windowWidth * 0.8,
    marginVertical: windowHeight * 0.025,
  },
  divider: {
    backgroundColor: 'rgba(218, 218, 247, 1)',
    width: windowWidth * 0.8,
    height: 0.7,
    marginTop: windowHeight * 0.03,
  },
  instructorC: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    borderRadius: 60,
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    marginRight: windowWidth * 0.02,
  },
  name: {
    color: 'rgba(31, 31, 57, 1)',
    fontWeight: '600',
    fontSize: windowHeight * 0.02,
  },
  title: {
    color: 'rgba(126, 126, 170, 1)',
    fontWeight: '400',
    fontSize: windowHeight * 0.018,
  },
  profileC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.035,
    backgroundColor: 'rgba(132, 89, 235, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: windowHeight * 0.02,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
  },
});
