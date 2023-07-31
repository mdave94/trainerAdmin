import { View, StyleSheet, Text, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import IconButton from "./IconButton";

type InputfieldProps = {
  type: string;
  placeholder?: string;
  iconName?: string;
  text?: string;
  iconSize: number;
  iconColor?: any; //Todo check color's type
  onChangeText: (text: string) => void;
};

function Inputfield({
  text,
  placeholder,
  onChangeText,
  iconName,
  iconSize,
  iconColor,
  type,
}: InputfieldProps) {
  const styleType = type === "searchbar" ? styles.searchbar : styles.input;

  return (
    <View style={[styles.container, styleType]}>
      <TextInput
        style={styles.searchbar}
        placeholder={placeholder}
        value={text}
        onChangeText={onChangeText}
      />
      <IconButton iconName={iconName} size={iconSize} color={iconColor} />
    </View>
  );
}

export default Inputfield;

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
  },
  input: {
    borderWidth: 2,
    borderColor: "gray",
  },
  searchbar: {
    height: 82,
    width: "80%",
    fontSize: 24,
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
});
