import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState(randomRBG);

  return (
    <View>
      <Button title="Change Color" onPress={() => setColor(randomRBG())} />
      <View
        style={{ height: 100, width: 100, backgroundColor: color }}
      />
    </View>
  );
};

const randomRBG = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
});

export default ColorScreen;
