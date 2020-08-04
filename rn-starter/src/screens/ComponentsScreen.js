import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  
  const name="Tommy Lim"
  
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
  textStyle2: {
    fontSize: 20,
    color: "blue",
  }
});

export default ComponentsScreen;
