import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwipeableComponent = () => {
  // Az alábbi komponens hozzáadja a csúsztatható műveleteket
  const renderRightActions = () => {
    // Ebben a példában egyszerűen egy háttérként használunk egy RectButton-t
    return (
      <RectButton onPress={() => console.log("Swipeable művelet kattintás")}>
        <View
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 20,
          }}
        >
          <Text style={{ color: "white" }}>Swipe</Text>
        </View>
      </RectButton>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Text>Ez egy csúsztatható elem.</Text>
    </Swipeable>
  );
};

export default SwipeableComponent;
