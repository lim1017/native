import React from "react";
import { Text, StyleSheet, View } from "react-native";

import ImgDetail from '../components/ImgDetail'

const ImgScreen = () => {
  
  
  return (
    <View>
      <ImgDetail title="Forest" url={require(`../../assets/forest.jpg`)} score="9"/>
      <ImgDetail title="Island" url={require(`../../assets/beach.jpg`)} score="5"/>
      <ImgDetail title="Mountain" url={require(`../../assets/mountain.jpg`)} score="8"/>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  }
});

export default ImgScreen;
