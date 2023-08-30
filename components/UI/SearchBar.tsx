import React, { useRef } from "react";
import { TextInput, StyleSheet, View, Platform, Keyboard } from "react-native"; // Import Platform

import IconButton from "./IconButton";

type SearchbarType = {
  text?: string;
  onChangeText: (text: string) => void;
};

function Searchbar({ text, onChangeText }: SearchbarType) {
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.searchbar}
        placeholder="Search"
        value={text}
        onChangeText={onChangeText}
        onFocus={handleFocus} // Focus the input field when the Searchbar is touched
      />
      <IconButton iconName="search" size={24} color="black" />
    </View>
  );
}

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
    height: 82,
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
    height: 42,
    width: "80%",
    fontSize: 24,
  },
});
