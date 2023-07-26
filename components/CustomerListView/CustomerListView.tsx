import { View, StyleSheet, FlatList } from "react-native";
import CustomerListViewItem from "./CustomerListViewItem";
import { CUSTOMERS } from "../../data/dummy_data";

type CustomerListView = {};

function CustomerListView(params: CustomerListView) {
  function renderMealItem(itemData: any) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      name: item.name,
      nickname: item.nickname,
      birthday: item.birthday,
      phoneNumber: item.phoneNumber,
      email: item.email,
      membershipType: item.membershipType,
    };
    return <CustomerListViewItem data={mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={CUSTOMERS}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        numColumns={2}
      />
    </View>
  );
}

export default CustomerListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});