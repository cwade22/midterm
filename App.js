import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text,TextInput, View } from 'react-native';
import styles from "./styles"

export default function App() {
  const [number, onChangeNumber]=React.useState(0);
  const [number2, onChangeNumber2]=React.useState(0);
  const [message, setMessage] = React.useState("");
  
  function compareNumbers(){
    //figure out function here
  
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.column}>Midterm
      <Text>Compare Two Numbers</Text>
      </View>
      <Text> Number 1:</Text>
      <TextInput
      onChangeText={onChangeNumber}
      value={number}
      keyboardType="numeric" 
      />
      <Text> Number 2:</Text>
      <TextInput
      onChangeText={onChangeNumber2}
      value={number2}
      keyboardType="numeric" 
      />
      <Button title="Compare " onPress={()=> setMessage(compareNumbers())}/>
      <StatusBar style="auto" />
      <Text>{message}</Text>
    </View>
  );
}

//where does validation for numbers even go
//how to do an if else statement in jsx?