import React from 'react';
import { Text , View, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class Movies extends React.Component {

  listMovies = () =>{
    const movies = this.props.movies
    let retList = []
    if(movies){
      for (let index = 0; index < movies.length; index++) {
        const element = movies[index];
        retList.push(element)
        console.log(retList)
      }
      return (
        <FlatList 
          numColumns={1}
          data={retList}
          renderItem={({ item: { _id, title, year } }) => {
            return (
            <Text>Title: {title}  - Made In: {year}</Text>
            );
          }}
          keyExtractor={retList => retList._id}/>
      
    );
    }    
    
    return (     
      <Text>{"movies"}</Text>
    )
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>this.listMovies()}>
          <Text>Movies</Text>
          {setTimeout(console.log("asdf"),3000)}
          <this.listMovies/>
          
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer,
  };
};


export default connect(mapStateToProps)(Movies);
