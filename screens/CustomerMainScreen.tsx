import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { useState } from "react";
import CustomButton from "../components/UI/CustomButton";
import AddCommentModalScreen from "./AddCommentModalScreen";
import { deleteCommentBE } from "../helpers/http";
import React from "react";
import SwipeableComponent from "../components/SwipeableComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeableListComponent from "../components/UI/SwipeableListComponent";

type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [longPressedCommentId, setLongPressedCommentId] = useState<
    string | null
  >(null);

  const commentLogs = customerData.commentLogs || {}; // Ensure commentLogs is an object
  const [comments, setComments] = useState(
    Object.entries(commentLogs).reverse()
  );

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmitModal = (inputValue: string) => {
    console.log("Submitted:", inputValue);
    closeModal();
  };

  const renderCommentItem = (itemData: any) => {
    const commentId = itemData.item[0]; // Extract the comment ID (key)
    const commentText = itemData.item[1]; // Extract the comment text (value)

    const handleDeleteComment = (commentId: string) => {
      setLongPressedCommentId(commentId);
      Alert.alert(
        "Delete Comment",
        "Are you sure you want to delete this comment?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => {
              const updatedComments = comments.filter(
                ([id]) => id !== commentId
              );

              deleteCommentBE(customerData.id, commentId);
              setComments(updatedComments);
            },
          },
        ]
      );
    };

    return (
      <Pressable
        onLongPress={() => handleDeleteComment(commentId)}
        onPressOut={() => setLongPressedCommentId(null)} // Reset the long-pressed item
        style={longPressedCommentId === commentId ? styles.deleteElement : null}
      >
        <View style={styles.commentContainer}>
          <Text style={styles.commentText} key={commentId}>
            {commentText}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.alignItemCenter}>
        <Text style={styles.customerName}>{customerData.name}</Text>
      </View>

      <View style={styles.alignItemCenter}>
        <Text
          style={{
            fontSize: 28,
          }}
        >
          Membership :{" "}
        </Text>
        {customerData.membershipType !== "" ? (
          <Text
            style={{
              fontSize: 112,
            }}
          >
            {customerData.membershipType}
          </Text>
        ) : (
          <Text>No membership</Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
        {customerData.membershipType === "" && (
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => console.log("add membership")}>
              Add Membership
            </CustomButton>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <CustomButton onPress={openModal}>Add comment</CustomButton>
          <AddCommentModalScreen
            customerId={customerData.id}
            visible={modalVisible}
            onClose={closeModal}
            onSubmit={handleSubmitModal}
          />
        </View>
        <View style={styles.flatlistContainer}>
          <SwipeableListComponent
            items={commentLogs}
            customerId={customerData.id}
          />
        </View>
      </View>
    </View>
  );
}

export default CustomerMainScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "white",
  },
  deleteElement: {
    backgroundColor: "red",
    opacity: 0.8,
  },
  flatlistContainer: {
    marginHorizontal: 12,
    maxHeight: 240,
    minHeight: 160,
    marginBottom: 42,
  },
  alignItemCenter: {
    alignItems: "center",
  },
  customerName: {
    marginTop: 24,
    fontSize: 42,
  },
  commentContainer: {
    marginBottom: 4,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    minHeight: 62,
    fontSize: 24,
  },
  commentText: {
    maxWidth: "70%",
    marginLeft: 24,
    fontSize: 24,
  },
  bottomContainer: {
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
});
