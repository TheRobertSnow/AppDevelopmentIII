import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  containerText: {
    marginBottom: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
  infoContainer: {
    justifyContent: 'center',
    width: '65%',
  },
  imageContainer: {
    width: '30%',
  },
  containerName: {
    margin: 8,
    fontSize: 25,
  },
  poster: {
    width: '100%',
    height: 180,
    margin: 5,
    borderRadius: 8,
  },
});
