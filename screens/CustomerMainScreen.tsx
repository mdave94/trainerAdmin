import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native";
import { COMMENTS } from "../data/dummy_data";
import CommentsLog from "../models/commentsLog";
type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;

  console.log("customerData:", customerData);

  const renderCommentItem = (itemData: any) => {
    const item = itemData.item;
    return <Text>{item}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.alignItemCenter}>
        <Text style={styles.customerName}>{customerData.name}</Text>
      </View>

      <View>
        <Text>Membership : </Text>
        {customerData.membershipType !== "" ? (
          <Text>{customerData.membershipType}</Text>
        ) : (
          <Text>No membership</Text>
        )}
      </View>

      <Button
        title="Add Membership"
        onPress={() => console.log("add membership")}
      />
      <Button
        title="Add Comment"
        onPress={() => console.log("add membership")}
      />

      <FlatList
        data={customerData.commentLogs}
        renderItem={renderCommentItem}
      />
    </View>
  );
}

export default CustomerMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  alignItemCenter: {
    alignItems: "center",
  },
  customerName: {
    fontSize: 42,
  },
});
