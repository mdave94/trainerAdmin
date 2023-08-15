import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import AddCommentModalScreen from "./AddCommentModalScreen";
import IconButton from "../components/UI/IconButton";
type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  console.log(customerData.commentLogs);
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

    return (
      <View style={styles.commentContainer}>
        <Text style={styles.commentText} key={commentId}>
          {commentText}
        </Text>
        <IconButton iconName="trash-bin-outline" size={24} />
      </View>
    );
  };
  const reversedCommentData = Object.entries(
    customerData.commentLogs
  ).reverse();
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

      {customerData.membershipType === "" && (
        <View style={styles.alignItemCenter}>
          <CustomButton onPress={() => console.log("add membership")}>
            Add Membership
          </CustomButton>
        </View>
      )}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton onPress={openModal}>Add comment</CustomButton>
        <AddCommentModalScreen
          customerId={customerData.id}
          visible={modalVisible}
          onClose={closeModal}
          onSubmit={handleSubmitModal}
        />
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reversedCommentData}
          renderItem={renderCommentItem}
        />
      </View>
    </View>
  );
}

export default CustomerMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flatlistContainer: {
    maxHeight: 240,
    minHeight: 160,
    marginBottom: 42,
  },
  alignItemCenter: {
    alignItems: "center",
  },
  customerName: {
    fontSize: 42,
  },
  commentContainer: {
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    height: 62,
    fontSize: 24,
  },
  commentText: {
    marginLeft: 24,
    fontSize: 24,
  },
});
