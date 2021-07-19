import React, { useState } from "react";
import axios from "axios";
import { View, Text, ScrollView, Button, SafeAreaView, StyleSheet, Image } from "react-native";

const List = () => {
  const [pokemon, setPokemo] = useState([])

  // const pok = route.params;
  const getPok = async () => {
    const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon-color/5/`);
    setPokemo(pok.data.pokemon_species)
  }

  return (
    <SafeAreaView>
      <ScrollView>
          <View style={{marginTop: 40, alignItems: 'center' }}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>POKEDEX</Text>
            <Button title="Obtener pokemons" onPress={getPok}/>
          </View>
          <View>
            {pokemon.map(pokemon => <Text key={pokemon.name}> nombre:  {pokemon.name} </Text>)}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default List