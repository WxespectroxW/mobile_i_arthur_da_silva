import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <View>
        <View>

          <View style ={styles.campoinput}>
            <Text>Email</Text>

            <TextInput onChangeText={onChangeText}
              style={styles.input}
              value={text}
              placeholder="tucas@gmail.com">
            </TextInput>
          </View>
          <View style ={styles.campoinput}>
            <Text>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="1232483920"
              keyboardType="numeric"
            />
          </View>
        </View>
        <Link href={"./Homeapp2"}>
        <Pressable style = {styles.button}>
          <Text>Entrar</Text>
          
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
  campoinput:{
    margin: 0,
    padding: 0,

  },
  input: {
    width: 370,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,

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

