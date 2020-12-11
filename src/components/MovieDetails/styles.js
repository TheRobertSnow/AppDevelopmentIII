import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 9,
    borderBottomWidth: 2,
    borderBottomColor: '#bebebe',
    backgroundColor: '#e7e7e7',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.26,
    shadowRadius: 2.22,
    elevation: 3,
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
    padding: 4,
    fontSize: 25,
    fontWeight: 'bold',
  },
  poster: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
});
