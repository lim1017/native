import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState(randomRBG);
  const [colorArr, setColorArr] = useState([]);



  return (
    <View>
      <Button title="Change Color" onPress={() => setColor(randomRBG())} />
      <View
        style={{ height: 100, width: 100, backgroundColor: color }}
      />

      <Button title="Add Color" onPress={() => setColorArr([...colorArr, randomRBG()])} />
      <FlatList 
      keyExtractor={(color)=> color}
      data={colorArr} 
      renderItem={({item})=>{
        return <View style={{ height: 100, width: 100, backgroundColor: item }}/>
      }} />    
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
