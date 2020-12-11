import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cinemaContainer: {
    backgroundColor: '#fff',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cinemaContainerText: {
    margin: 5,
    fontSize: 25,
  },
  cinemaContainerLink: {
    margin: 5,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
