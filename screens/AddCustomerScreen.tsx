import { View, Text, StyleSheet } from "react-native";
import Inputfield from "../UI/Inputfield";
import { useState } from "react";
import Customer from "../models/customer";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { checkIsValidEmail } from "../helpers/utilites";
import { storeCustomer } from "../helpers/http";

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
    <View style={styles.container}>
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
      <Button title="Register" onPress={handleSubmit} />
    </View>
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
