import { View, StyleSheet, TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import IconButton from "./UI/IconButton";

type InputfieldProps = {
  iconName?: string;
  iconSize?: number;
  iconColor?: any; //Todo check color's type
} & TextInputProps;

function Inputfield({
  iconName,
  iconSize,
  iconColor,
  ...textInputProps
}: InputfieldProps) {
  const { placeholder, value, onChangeText } = textInputProps;

  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.inputInner}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...textInputProps}
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
    borderWidth: 2,
    borderColor: "gray",
    fontSize: 32,
    color: "white",
  },
  inputInner: {
    width: "80%",
    fontSize: 24,
  },
});
