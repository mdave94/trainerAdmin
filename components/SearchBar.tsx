import { TextInput, StyleSheet, View, Platform } from "react-native"; // Import Platform
import IconButton from "../UI/IconButton";

type SearchbarType = {
  text?: string;
};

function Searchbar(params: SearchbarType) {
  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.searchbar} placeholder="Search" />
        <IconButton iconName="search" size={24} color="black" />
      </View>
    </>
  );
}

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "space-between",
    height: 42,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 24,
    paddingLeft: 32,
    // Add shadow effect
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.8,
        shadowRadius: 14,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  searchbar: {
    fontSize: 24,
  },
});
