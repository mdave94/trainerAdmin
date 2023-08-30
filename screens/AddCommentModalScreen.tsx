import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  StyleSheet,
  ModalProps,
  Dimensions, // Import Dimensions
} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import { storeComment } from "../helpers/http";

type AddCommentModalScreenProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (inputValue: string) => void;
  customerId: string;
} & ModalProps;

function AddCommentModalScreen({
  visible,
  onSubmit,
  onClose,
  customerId,
}: AddCommentModalScreenProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    storeComment(customerId, inputValue);
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Add comment"
            value={inputValue}
            onChangeText={handleInputChange}
          />
          <View style={styles.buttonContainer}>
            <CustomButton onPress={handleSubmit}>Submit</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={onClose}>Close</CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddCommentModalScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  buttonContainer: {
    margin: 8,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    alignItems: "center",

    width: Dimensions.get("window").width - 40, // Set the width
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 12,
    fontSize: 21,
    height: 72,
  },
});
