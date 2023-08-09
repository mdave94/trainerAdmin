import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../UI/GlobalStyles";

type CustomerListViewItemProps = {
  data: {
    id: string;
    name: string;
    nickname: string;
    birthday: string;
    phoneNumber: string;
    email: string;
    membershipType: string;
    commentLogs: string[];
  };
  navigation: any;
};

function CustomerListViewItem({ data, navigation }: CustomerListViewItemProps) {
  const handleCustomerPress = () => {
    navigation.navigate("CustomerMainScreen", { customerData: data });
  };

  function hasMembership() {
    const getstyle =
      data.membershipType !== "" ? styles.hasMembership : styles.noMembership;
    return getstyle;
  }

  const handleLongPress = () => {
    navigation.navigate("QuickEdit", {
      customer: data,
      presentation: "modal",
    });
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={handleCustomerPress}
        onLongPress={handleLongPress}
      >
        <View style={[styles.item, hasMembership()]}>
          <Text style={[styles.text, hasMembership()]}>{data.name}</Text>
          {data.nickname !== "" && (
            <Text style={[styles.text]}>({data.nickname})</Text>
          )}

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
    width: 120,
    height: 170,
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
  noMembership: {
    backgroundColor: GlobalStyles.colors.blue,
  },
  hasMembership: {
    backgroundColor: GlobalStyles.colors.yellow,
    color: "black",
  },
});
