import { View, StyleSheet } from "react-native";

import IconButton from "../UI/IconButton";

type TopMenubarProp = {};

function TopMenubar(params: TopMenubarProp) {
  function settingsMenuhandler() {
    console.log("clicked");
  }

  return (
    <View style={styles.topmenubar}>
      <IconButton
        iconName="menu"
        size={42}
        color="white"
        onPress={settingsMenuhandler}
      />
    </View>
  );
}

export default TopMenubar;

const styles = StyleSheet.create({
  topmenubar: {
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    width: "100%",
    backgroundColor: "black",
    color: "black",
    flexDirection: "row",
  },
});