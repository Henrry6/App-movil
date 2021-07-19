import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";

const Movies = () => {
  const [movie, setMovie] = useState(null)

    useEffect(() => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', 'http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars&y=1977')
      xhr.send()
      xhr.onload = () => {
        const respone = JSON.parse(xhr.responseText)
        setMovie(respone)
      }
    }, []);

  return (
    <SafeAreaView>
      <ScrollView>
          <View style={{marginTop: 40, marginLeft: 12 }}>
            <Text style={styles.titles}>Título</Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>{movie == null ? "" : movie.Title}</Text>
            <Text style={styles.titles}>Año</Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>{movie == null ? "" : movie.Released}</Text>
            <Text style={styles.titles}>Descripción</Text>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>{movie == null ? "" : movie.Plot}</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   paddingTop: 50,
  // },
  titles: {
    color: 'black',
    fontWeight: 'bold'
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default Movies
