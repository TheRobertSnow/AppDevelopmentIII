import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
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
    width: '60%',
  },
  buttonContainer: {
    backgroundColor: '#4267B2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '40%',
  },
});
