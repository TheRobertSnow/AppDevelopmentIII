import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    padding: 9,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  containerText: {
    padding: 6,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    width: '60%',
  },
  genreContainer: {
    padding: 6,
    flexDirection: 'row',
  },
  imageContainer: {
    justifyContent: 'center',
    width: '40%',
  },
  containerName: {
    padding: 6,
    fontSize: 25,
  },
  poster: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
});
