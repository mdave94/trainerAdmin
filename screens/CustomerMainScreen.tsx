import { View, Text } from "react-native";

type CustomerMainScreenProps = {
  route: any;
};

function CustomerMainScreen(params: CustomerMainScreenProps) {
  const { customerData } = params.route.params;

  return (
    <View>
      <Text>CUSTOMER MAIN SCREEN</Text>
      <Text>{customerData.name}</Text>
    </View>
  );
}

export default CustomerMainScreen;
