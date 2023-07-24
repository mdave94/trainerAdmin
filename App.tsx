import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomerListView from "./components/CustomerListView/CustomerListView";
import Searchbar from "./components/SearchBar";
import TopMenubar from "./components/TopMenubar";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <TopMenubar />
      <CustomerListView />

      <View style={styles.footerMenu}>
        <Searchbar />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  footerMenu: {
    marginBottom: 60,
    flexDirection: "row",
    width: "100%",
    height: 80,
  },
});
