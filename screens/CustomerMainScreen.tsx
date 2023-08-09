import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Button } from "react-native";
import AddCommentModalScreen from "./AddCommentModalScreen";
type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;
  const [modalVisible, setModalVisible] = useState(false);

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
          visible={modalVisible}
          onClose={closeModal}
          onSubmit={handleSubmitModal}
        />
      </View>

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
