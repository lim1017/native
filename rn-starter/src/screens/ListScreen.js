import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  
  const friends =[
    { name: "Friend 1", age: 12},
    { name: "Friend 2", age: 13},
    { name: "Friend 3", age: 14},
    { name: "Friend 4", age: 11},
    { name: "Friend 5", age: 12},
    { name: "Friend 6", age: 15},
    { name: "Friend 7", age: 16},
    { name: "Friend 8", age: 18},
  ]

  return (
    <View>
      <FlatList 
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend)=> friend.name}
      data={friends} 
      renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name} - {item.age} years old</Text>
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical:50
  }
});

export default ListScreen;
