import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  cinemaContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    width: windowWidth - 100,
    alignItems: 'center',
  },
  cinemaContainerText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
  },
});
