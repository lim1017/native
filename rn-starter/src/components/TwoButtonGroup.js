import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const TwoButtonGroup = (props) => {
  
  const {title, handlePress} = props

  

  return (
    <View>
      <Text>{title}</Text>
      <Button 
        title={`add ${title}`}
        onPress={()=>handlePress('add', title)}
      />
      <Button 
        title={`remove ${title}`}
        onPress={()=>handlePress('remove', title)}
      />

    </View>
  );
};



export default TwoButtonGroup;
