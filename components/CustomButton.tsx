import {
  Pressable,
  View,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";

type CustomButtonProps = {
  children: React.ReactNode;
} & PressableProps;

function CustomButton({ onPress, children }: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 36,
    backgroundColor: "black",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 240,
  },
  pressed: {
    opacity: 0.8,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
