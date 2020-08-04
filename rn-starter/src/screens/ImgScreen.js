import React from "react";
import { Text, StyleSheet, View } from "react-native";

import ImgDetail from '../components/ImgDetail'

const ImgScreen = () => {
  
  
  return (
    <View>
      <ImgDetail title="Forest" url={require(`../../assets/forest.jpg`)}/>
      <ImgDetail title="Island" url={require(`../../assets/beach.jpg`)}/>
      <ImgDetail title="Mountain" url={require(`../../assets/mountain.jpg`)}/>

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
