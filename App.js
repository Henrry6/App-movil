import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App movil Henrry</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 100, height: 100 }}
        />
      {/* <StatusBar style="auto" /> */}
      <Button title='Empezar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white'
  }
});
