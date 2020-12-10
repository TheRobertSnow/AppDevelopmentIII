import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Movie = ({
  id,
  title,
  poster,
  year,
  genres,
  currentCinema,
  navigation: {navigate}
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate('MovieDetail', { id: id, currentCinema: currentCinema})}
  >
    <View style={styles.container}>
      <Text style={styles.containerName}>{title}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.containerText}>Útgefin árið: {year}</Text>
          {
            genres[0].ID == null
            ?
            <></>
            :
            <View>
              <Text style={styles.containerText}>Tegundir: </Text>
              <FlatList
                numColumns={1}
                data={genres}
                renderItem={ ({ item: { ID, Name } }) => {
                  return (
                    <Text style={styles.containerText}>{Name}</Text>
                  );
                } }
                keyExtractor={genre => genre.ID.toString(10)}
              />
            </View>
          }
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.poster}
            resizeMode="cover"
            source={{ uri: poster }}
          />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default withNavigation(Movie);
