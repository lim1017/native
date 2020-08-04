import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  console.log(props)

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title="Components Page" 
        onPress={()=>props.navigation.navigate("Component")}
      />
      <Button 
        title="Lists  Page" 
        onPress={()=>props.navigation.navigate("Lists")}
      />
       <Button 
        title="Image Page" 
        onPress={()=>props.navigation.navigate("Image")}
      />
      {/* <TouchableOpacity
        onPress={()=>props.navigation.navigate("Lists")}
      >
        <Text>List Page</Text>
      </TouchableOpacity> */}

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  view: {
    display: "flex",
    justifyContent: "center",
  },
});

export default HomeScreen;
