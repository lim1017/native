import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";


const TextScreen = () => {
  const [value, setValue] = useState("");
  const [passowrd, setPassword] = useState("");

  console.log(value)
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={(newValue)=>setValue(newValue)}
      />
      <Text style={styles.textStyle}>Hello My name is {value}</Text>
    
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        value={passowrd}
        onChangeText={(newPass)=>setPassword(newPass)}
      />

      {passowrd.length>5? <Text>Good password</Text> : <Text>Must be greater then 5 char</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
