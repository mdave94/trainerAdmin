import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native";
import { COMMENTS } from "../data/dummy_data";
import CommentsLog from "../models/commentsLog";
type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;

  const renderCommentItem = (itemData: any) => {
    const item = itemData.item;

    return (
      <View>
        <Text>{item.commentText}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>{customerData.name}</Text>
      <Button
        title="Add Membership"
        onPress={() => console.log("add membership")}
      />
      <FlatList data={COMMENTS} renderItem={renderCommentItem} />
    </View>
  );
}

export default CustomerMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
