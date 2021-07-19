import axios from "axios";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button, Alert, Text, Image, ToastAndroid } from "react-native";

const Search = () => {
  const [pokemon, updateText] = useState('');
  const [imagPokemon, setPokemo] = useState('pokemon')
  const [name, setNamePokemon] = useState('')
  const [id, setId] = useState('')

  let handleChange =  async () => {
    try {
      const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      setPokemo(pok.data.sprites.front_default)
      setNamePokemon(pok.data.name)
      setId(pok.data.id)
      ToastAndroid.showWithGravityAndOffset(
        "Pokemon encontrado",
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        1050)
    } catch (err) {
      Alert.alert(
        "No encontrado!",
        "*Asegurate haber escrito bien el nombre",
      );
    }
  }

  return (
    <SafeAreaView>
      <View>
      <Text style ={styles.title}>Buscar pokemon</Text>
      </View>
      <Text style={styles.textInput}>Nombre del pokemon</Text>
      <View>
        <TextInput 
          style={styles.input} 
          placeholder="Buscar Pokemon"
          onChangeText={(val)=> updateText(val)}
        />
      </View>
      <View style={styles.container}>
        <Button title="Buscar" onPress={handleChange}/>
        <View style={styles.imag}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: imagPokemon }}
          />
          { (id) ? <Text>{'N°:'+ id}</Text> : <Text></Text>}
          <Text>{name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};  

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 100,
  },
  input: {
    height: 40,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  container: {
    // marginRight: 40,
    // display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imag: {
    borderWidth: 1,
    marginTop: 12,
    width: 100,
    height: 100,
    alignItems: 'center',

  },
  title: {
    marginTop: 30,
    backgroundColor: 'teal',
    color: 'white',
    fontSize: 20,
    padding:5
  },
  textInput: {
    color: 'black',
    marginTop:20,
    marginLeft:12
  }

});

export default Search;