import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: window.width,
    height: window.height/2,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 40,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: window.width-150,
    height: 100,
    backgroundColor: '#fbfbfb',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
  },
});
// #fbfbfb
