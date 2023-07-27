import { View, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import TopMenubar from "../components/TopMenubar";
import CustomerListView from "../components/CustomerListView/CustomerListView";
import Searchbar from "../components/SearchBar";
import { useState } from "react";

type CustomerListScreenProps = {};

function CustomerListScreen(params: CustomerListScreenProps) {
  const [searchText, setSearchText] = useState("");

  function handleSearch(text: string) {
    setSearchText(text);
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TopMenubar />
        <CustomerListView searchText={searchText} />

        <View style={styles.footerMenu}>
          <Searchbar text={searchText} onChangeText={handleSearch} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
export default CustomerListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  footerMenu: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    height: 80,
  },
});
