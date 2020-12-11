import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#bebebe',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
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
    padding: 4,
  },
  containerName: {
    padding: 4,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
