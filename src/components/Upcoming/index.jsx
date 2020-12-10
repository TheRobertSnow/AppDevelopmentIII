import React from 'react';
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import styles from './styles';
import ReactPlayer from 'react-player'



class Upcoming extends React.Component {

 


  render() {
    return(
    
      <View>
        
        <Text>{this.props.id.title}</Text>
          {console.log(this.props)}
        <Text>{this.props.id.releaseDate}</Text>
        <Image style={styles.thumbnail}
          resizeMode="cover"
          source={{ uri: this.props.id.poster }}
        />
        
        {/*linkurinn fyrir trailernum */ console.log(this.props.id.trailers["0"].results["0"].url)}
        
        <ReactPlayer
        url= {this.props.id.trailers["0"].results["0"].url}
        width= "100%"
        height= "40%"
        controls= {true}
      />
        
        
      </View>
    
    )
  }
}



/*
          


*/
export default Upcoming;


