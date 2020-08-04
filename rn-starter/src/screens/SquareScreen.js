import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import TwoButtonGroup from "../components/TwoButtonGroup";

const SquareScreen = () => {
  const colorInterval = 25;
  const [color, setColor] = useState({ red: 0, blue: 0, green: 0 });

  const makeColor = () => {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
  };

  const handlePress = (action, title) => {
    if (action === "add" && color[title] + colorInterval < 255) {
      setColor({ ...color, [title]: color[title] + colorInterval });
    }

    if (action === "remove" && color[title] - colorInterval >= 0) {
      setColor({ ...color, [title]: color[title] - colorInterval });
    }
  };

  return (
    <View>
      <TwoButtonGroup
        title="red"
        setColor={setColor}
        color={color}
        handlePress={handlePress}
      />
      <TwoButtonGroup
        title="green"
        setColor={setColor}
        color={color}
        handlePress={handlePress}
      />
      <TwoButtonGroup
        title="blue"
        setColor={setColor}
        color={color}
        handlePress={handlePress}
      />

      <View style={{ height: 100, width: 100, backgroundColor: makeColor() }} />

      <Button
        title="Reset"
        onPress={() => setColor({ red: 0, blue: 0, green: 0 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
});

export default SquareScreen;
