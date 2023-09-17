import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomButton from "../components/UI/CustomButton";
import AddCommentModalScreen from "./AddCommentModalScreen";
import React from "react";
import SwipeableListComponent from "../components/UI/SwipeableListComponent";
import { GlobalStyles } from "../components/UI/GlobalStyles";

type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const commentLogs = customerData.commentLogs || {}; // Ensure commentLogs is an object

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

  return (
    <View style={styles.container}>
      <View style={styles.alignItemCenter}>
        <Text style={styles.customerName}>{customerData.name}</Text>
      </View>

      <View style={styles.alignItemCenter}>
        <View style={styles.membershipContainer}>
          <Text
            style={{
              fontSize: 28,
            }}
          >
            Membership
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
    flex: 1,
    backgroundColor: "white",
  },
  deleteElement: {
    opacity: 0.8,
  },
  membershipContainer: {
    minHeight: 164,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: GlobalStyles.colors.blue,
    width: 220,
    marginBottom: 24,
  },
  flatlistContainer: {
    marginHorizontal: 12,
    height: 300,
    minHeight: 160,
    marginBottom: 42,
  },
  alignItemCenter: {
    alignItems: "center",
  },
  customerName: {
    marginTop: 24,
    fontSize: 42,
    marginBottom: 24,
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
