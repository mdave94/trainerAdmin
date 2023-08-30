import { View, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import CustomerListView from "../components/CustomerListView/CustomerListView";
import Searchbar from "../components/UI/SearchBar";
import { useState } from "react";

type CustomerListScreenProps = {};

function CustomerListScreen(params: CustomerListScreenProps) {
  const [searchText, setSearchText] = useState("");

  function handleSearch(text: string) {
    setSearchText(text);
  }
  //TODO
  //How to find the  height of the keyboard
  //https://stackoverflow.com/questions/46587006/how-to-get-a-height-of-a-keyboard-in-react-native

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : undefined} // Increase the offset value (e.g., 100) for more space
        style={{ flex: 1, backgroundColor: "#000" }}
      >
        <View style={styles.container}>
          <CustomerListView searchText={searchText} />

          <View style={styles.footerMenu}>
            <Searchbar text={searchText} onChangeText={handleSearch} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default CustomerListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  footerMenu: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    height: 80,
    marginBottom: 24,
  },
});
