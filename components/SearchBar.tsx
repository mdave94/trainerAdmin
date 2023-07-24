import { TextInput, StyleSheet } from "react-native";

type SearchbarType = {
  text?: string;
};

function Searchbar(params: SearchbarType) {
  return <TextInput style={styles.searchbar} placeholder="Search... " />;
}

export default Searchbar;

const styles = StyleSheet.create({
  searchbar: {
    fontSize: 24,
    textAlign: "left",
    paddingStart: 32,
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 14,
    paddingLeft: 8,
  },
});
