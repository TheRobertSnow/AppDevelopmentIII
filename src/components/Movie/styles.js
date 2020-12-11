import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerText: {
    padding: 6,
  },
  infoContainer: {
    justifyContent: 'center',
    width: '67%',
  },
  imageContainer: {
    justifyContent: 'center',
    width: '33%',
  },
  genreContainer: {
    padding: 6,
    flexDirection: 'row',
  },
  containerName: {
    padding: 6,
    fontSize: 22,
  },
  poster: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
});
