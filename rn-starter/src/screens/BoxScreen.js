import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.textStyle1}>box screen 1</Text>
      <Text style={styles.textStyle2}>box screen 2</Text>
      <Text style={styles.textStyle3}>box screen 3</Text> */}
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>

    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 10,
    borderColor: "black",
    flexDirection:'row',
    justifyContent: 'space-between',
    height:300
  },
  view1:{
    backgroundColor:"red",
    height:100,
    width:100,
  },
  view2:{
    backgroundColor:"blue",
    height:100,
    width:100,
    alignSelf:"center"
    // marginTop: 40
  },
  view3:{
    backgroundColor:"green",
    height:100,
    width:100,
  },
  // textStyle1: {
  //   borderWidth: 1,
  //   borderColor: "red",
  // },
  // textStyle2: {
  //   borderWidth: 1,
  //   borderColor: "red",
  //   ...StyleSheet.absoluteFillObject,

    
  // },
  // textStyle3: {
  //   borderWidth: 1,
  //   borderColor: "red",
  // },
});

export default BoxScreen;
