import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import AddCommentModalScreen from "./AddCommentModalScreen";
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

    return <Text key={commentId}>{commentText}</Text>;
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

      {customerData.membershipType === "" && (
        <View style={styles.alignItemCenter}>
          <CustomButton onPress={() => console.log("add membership")}>
            Add Membership
          </CustomButton>
        </View>
      )}

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CustomButton onPress={openModal}>Add comment</CustomButton>
        <AddCommentModalScreen
          customerId={customerData.id}
          visible={modalVisible}
          onClose={closeModal}
          onSubmit={handleSubmitModal}
        />
      </View>

      <FlatList
        data={Object.entries(customerData.commentLogs)}
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
