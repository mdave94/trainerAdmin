import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TopMenubarProp = {};

function TopMenubar(params: TopMenubarProp) {
  function settingsMenuhandler() {
    console.log("clicked");
  }

  return (
    <View style={styles.topmenubar}>
      <Ionicons name="add" size={32} color="blue" />
      <Text style={{ color: "white" }}>TOP MENU BAR</Text>
    </View>
  );
}

export default TopMenubar;

const styles = StyleSheet.create({
  topmenubar: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: "100%",
    backgroundColor: "black",
    color: "black",
  },
});
