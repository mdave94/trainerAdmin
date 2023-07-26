import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../UI/GlobalStyles";

type CustomerListViewItemProps = {
  data: any;
};

function CustomerListViewItem({ data }: CustomerListViewItemProps) {
  function hasMembership() {
    return data.membershipType !== "0" && styles.hasMembership;
  }
  return (
    <View>
      <Pressable style={({ pressed }) => pressed && styles.buttonPressed}>
        <View style={[styles.item, hasMembership()]}>
          <Text style={[styles.text, hasMembership()]}>{data.name}</Text>
          <Text style={[styles.text, hasMembership()]}>({data.nickname})</Text>
          <View>
            <Text>{data.membershipType}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomerListViewItem;

const styles = StyleSheet.create({
  item: {
    borderRadius: 12,
    minWidth:120,
    maxWidthidth: 170,
    height: 170,
    backgroundColor: GlobalStyles.colors.blue,
    margin: 14,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  hasMembership: {
    backgroundColor: GlobalStyles.colors.yellow,
    color: "black",
  },
});
