import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App movil Henrry</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 100, height: 100 }}
        />
      <Button
        onPress={() => navigation.navigate('Buscar')}
        title="Empezar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30 ,
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white'
  }
});