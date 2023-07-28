import { View, StyleSheet, FlatList, Text } from "react-native";
import CustomerListViewItem from "./CustomerListViewItem";
import { CUSTOMERS } from "../../data/dummy_data";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import IconButton from "../../UI/IconButton";
type CustomerListView = {
  searchText: string;
};

function CustomerListView({ searchText }: CustomerListView) {
  const navigation = useNavigation();

  function filterData() {
    if (!searchText) {
      return CUSTOMERS;
    }
    //Search customer
    return CUSTOMERS.filter(
      (customer) =>
        customer.name
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        customer.nickname
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
  }

  if (filterData().length === 0) {
    return (
      <View style={[styles.container, styles.errorMessage]}>
        <Text> Can't find user </Text>
        <IconButton
          iconName="chatbubble-ellipses-outline"
          size={32}
          color="black"
        />
      </View>
    );
  }

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
    return (
      <CustomerListViewItem data={mealItemProps} navigation={navigation} />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filterData()}
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
    justifyContent: "center",
  },
  errorMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
