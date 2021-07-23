import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Button } from "react-native";
  
const Movies = ({route}) => {
  
  const [movie, setMovie] = useState(null)
  const [mok, setMok] = useState(route?.params)
    useEffect(() => {
      const result = mok.data.find((movie) => movie.image === mok.img)
        setMovie({
          Title: result.name,
          Released: result.year,
          Plot: result.descripcion
        })
      //   const xhr = new XMLHttpRequest()
      //   xhr.open('GET', 'http://www.omdbapi.com/?apikey=cc456efe&t=Star+Wars&y=1977')
      //   xhr.send()
      //   xhr.onload = () => {
      //     const respone = JSON.parse(xhr.responseText)
      //     setMovie(respone)
      //   }
    }, []);

  const _Pelicula = () => {
    return (
      <View style={{marginTop: 40, marginLeft: 12 }}>
        <Text style={styles.titles}>Título</Text>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>{movie == null ? "" : movie.Title}</Text>
        <Text style={styles.titles}>Año</Text>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>{movie == null ? "" : movie.Released}</Text>
        <Text style={styles.titles}>Descripción</Text>
        <Text style={{color: 'blue', fontWeight: 'bold'}}>{movie == null ? "" : movie.Plot}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View styles= {styles.bto}>
          {/* <Button   title="Obtener pokemons" onPress={Pelicula}/> */}
          <_Pelicula />
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
  bto: {
    marginTop: 66,
  },
});

export default Movies
