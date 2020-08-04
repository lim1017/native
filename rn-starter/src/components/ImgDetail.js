import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImgDetail = (props) => {
  
  const color = ()=>{
    if (props.title === "Forest"){
      return "green"
    }
    if (props.title === "Island"){
      return "blue"
    }
    if (props.title === "Mountain"){
      return "red"
    }
  }
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 24,
      color: color(),
    }
  });
  
  
  return (
    <View>
      <Image source={props.url}/>
      <Text style={styles.textStyle}>{props.title} - {props.score}</Text>
    </View>
  );
};



export default ImgDetail;
