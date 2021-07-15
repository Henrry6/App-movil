import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button } from "react-native";

const Search = () => {
  const [text, onChangeText] = React.useState();

  // getData() {

  // }

  // let handleChange = async (e) => {
  //   e.preventDefault();
  //   const resp = await axios.get(`https://api.github.com/users/mojombo`);
  //   console.log(resp.data)
  //   setState('')
  // } 

  return (
      <View style={{marginTop: 40, justifyContent: 'center' }}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Buscar"
          value={text}
        />
      </SafeAreaView>
      <Button title="Buscar" />
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Search;