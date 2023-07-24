import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  iconName: any;
  size: number;
  color: string;
  onPress: () => void;
};
//Custom Button component
function IconButton({ iconName, size, color, onPress }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressedStyle}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={iconName} size={32} color="blue" />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressedStyle: {
    opacity: 0.75,
  },
});
