import { useState } from "react";
import { View, Text, Alert, StyleSheet, Pressable } from "react-native";
import { decreaseSessionCount } from "../helpers/http";

type QuickEditProps = {
  route?: any;
  customer?: any;
};

function QuickEdit({ customer }: QuickEditProps) {
  const [sessionCounter, setSessionCounter] = useState<number>(
    customer.membershipType
  );

  const handleMembershipButton = () => {
    Alert.alert("Alkalom levonása", "Biztosan le kívánod vonni az alkalmat ?", [
      {
        text: "Vissza",
        style: "cancel",
      },
      {
        text: "Törlés",
        style: "destructive",
        onPress: () => {
          if (sessionCounter == 0) {
            Alert.alert("Hiba", "Elfogytak az alkalmak");
          } else {
            setSessionCounter(sessionCounter - 1);

            decreaseSessionCount(customer.id);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{customer.name}</Text>
      <View style={styles.middleContainer}>
        <Pressable
          onPress={handleMembershipButton}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>{sessionCounter}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default QuickEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 30,
    fontSize: 42,
    textAlign: "center",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 42,
    width: 200,
    height: 200,
  },
  buttonText: {
    fontSize: 124,
    color: "white",
    borderRadius: 24,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
