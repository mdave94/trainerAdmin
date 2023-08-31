import React from "react";
import { View, FlatList, Text, Button } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwipeableComponent = (comments: any) => {
  console.log("comments", comments.comment);

  const dummyComments = [
    {
      id: 1,
      text: "asd",
    },
    {
      id: 2,
      text: "asd",
    },
    {
      id: 3,
      text: "asd",
    },
    {
      id: 4,
      text: "asd",
    },
  ];
  const renderCommentItem = (itemData: any) => {
    const commentId = itemData.item[0]; // Extract the comment ID (key)
    const commentText = itemData.item[1];

    const renderLeftActions = () => <Button title={commentText} />;

    return (
      <Swipeable renderLeftActions={renderLeftActions}>
        <View style={styles.commentItem}>
          <Text>{commentText}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={comments.comments}
        renderItem={renderCommentItem}
      />
    </View>
  );
};

const styles = {
  flatlistContainer: {
    flex: 1,
  },
  commentItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  leftAction: {
    flex: 1,
    backgroundColor: "#ff6347",
    justifyContent: "center",
  },
};

export default SwipeableComponent;
