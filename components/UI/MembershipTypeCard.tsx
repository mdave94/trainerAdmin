import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "./GlobalStyles";

function MembershipTypeCard() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardRow}>
          <Text style={styles.rowName}>Belépő neve:</Text>
          <Text style={styles.cardName}> Belépő</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.rowName}>Ár:</Text>
          <Text style={styles.cardName}> 2100</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.rowName}>Alkalom:</Text>
          <Text style={styles.cardName}> 1 </Text>
        </View>
      </View>
    </>
  );
}

export default MembershipTypeCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    padding: 10,
    width: 200,
    height: 120,
    borderRadius: 24,
    backgroundColor: GlobalStyles.colors.blue,
  },
  cardName: {
    fontSize: 24,
  },
  cardRow: {
    flexDirection: "row",
  },
  rowName: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
