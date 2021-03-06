import React, {useState, useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";



const reducer = (state, action)=>{
  switch(action.type){
    case "increase":
      return {...state, counter:state.counter+1}
    case "decrease":
      return {...state, counter:state.counter-1}
    default:
      return state;
  }
}

const CounterScreen = () => {
  
  // const [counter, setCounter] = useState(0)
  
  const [state, dispatch] = useReducer(reducer, {counter:0})

  


  return (
    <View>
      <Button title="Increase" onPress={()=>{dispatch({type:"increase"})}} />
      <Button title="Decrease" onPress={()=>{dispatch({type:"decrease"})}} />
      <Text>Current Counts: {state.counter}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  }
});

export default CounterScreen;
