import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.Texto}>
        <View>

          <View style ={styles.Entrada}>
            <Text style ={styles.Entrada}>Bem Vindo!</Text>

          </View>
          <View >
            <Text>Aqui você pode testar sua câmera, clique no botão abaixo para testar</Text>
            
          </View>
        </View>
        <Link href={"./Testecamera"}>
        <Pressable style = {styles.button}>
          <Text>Quero testar minha câmera</Text>
          
        </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  
  },
 Entrada:{
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,

  },
  Texto:{
    gap: 100,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00fa",
    width: 400,
    height: 50,
    borderRadius: 20,

  }
});

