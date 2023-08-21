import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

type QuickEditProps = {};

const handleMembershipButton = () => {
  console.log("levont");
};

function QuickEdit(params: QuickEditProps) {
  return (
    <View style={styles.container}>
      <Text>USER NAME </Text>
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={handleMembershipButton}
        >
          <Text style={styles.buttonText}> 10 </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default QuickEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 12,
    color: "white",
  },
  buttonText: {
    fontSize: 124,
    color: "white",
    width: "100%",
    borderRadius: 24,
  },
});
