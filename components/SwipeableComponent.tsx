import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwipeableComponent = () => {
  // Az alábbi komponens hozzáadja a csúsztatható műveleteket
  const renderRightActions = () => {
    // Ebben a példában egyszerűen egy háttérként használunk egy RectButton-t
    return (
      <RectButton onPress={() => console.log("Swipeable művelet kattintás")}>
        <View style={styles.reactionElem}>
          <Text style={{ color: "white" }}>Swipe</Text>
        </View>
      </RectButton>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Text style={styles.swipeItem}>Ez egy csúsztatható elem.</Text>
    </Swipeable>
  );
};

export default SwipeableComponent;

const styles = StyleSheet.create({
  reactionElem: {
    backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 40,
  },
  swipeItem: {
    marginLeft: 24,
    fontSize: 24,
    marginBottom: 4,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    minHeight: 62,
  },
});
