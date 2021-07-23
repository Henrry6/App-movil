import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  ToastAndroid
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
  };

  const [state, setState] = useState(initalState);
  const [bto, setBto] = useState(false);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "" || state.email === "") {
      alert("El nombre y el email son obligatorios.");
    } else {
      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });
        ToastAndroid.showWithGravityAndOffset(
          "Usuario creado correctamente",
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          1350)
          setState(initalState)
          setBto(true)
        // props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style ={styles.title}>
      <Text style ={{fontSize: 20}}>Crear Usuario</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
          required
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
          required
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Télefono"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>
      <View style={styles.button}>
        <Button title="Crear" onPress={() => saveNewUser()} />
      </View>
      { bto === true ? <View style={styles.footer}>
        <Button title="Ir al inicio" onPress={() => props.navigation.navigate("Inicio")} />
      </View> : <Text></Text> }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 300,
    width: 115,
    marginLeft: 170
  },
  title: {
    marginTop: 30,
    color: 'black',
    marginBottom: 40,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;