import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Inputfield from "../components/Inputfield";
import { useState } from "react";
import Customer from "../models/customer";
import { useNavigation } from "@react-navigation/native";
import { checkIsValidEmail } from "../helpers/utilites";
import { storeCustomer } from "../helpers/http";
import CustomButton from "../components/CustomButton";

type AddCustomerProps = {};

function AddCustomerScreen(params: AddCustomerProps) {
  const navigation = useNavigation();
  const initialData: Customer = {
    id: "",
    name: "",
    nickname: "",
    birthday: "",
    phoneNumber: "",
    email: "",
    membershipType: "",
    commentLogs: [],
  };

  const [formData, setFormData] = useState<Customer>(initialData);

  const handleInputChange = (field: keyof Customer, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (checkIsValidEmail(formData.email)) {
      storeCustomer(formData);
      setFormData(initialData);
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : undefined}
      style={styles.container}
    >
      <Text> ADD CUSTOMER</Text>
      <Inputfield
        value={formData.name}
        placeholder="John Doe"
        iconSize={24}
        iconName="person-outline"
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <Inputfield
        keyboardType="numeric"
        value={formData.birthday}
        iconSize={24}
        placeholder="19940711"
        iconName="book-outline"
        onChangeText={(value) => handleInputChange("birthday", value)}
      />
      <Inputfield
        value={formData.email}
        autoCapitalize="none"
        placeholder="example@email.com"
        iconSize={24}
        iconName="at"
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <CustomButton onPress={handleSubmit}>Register</CustomButton>
    </KeyboardAvoidingView>
  );
}

export default AddCustomerScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
