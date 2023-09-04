import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SwipeableFlatList from "rn-gesture-swipeable-flatlist";
import { deleteCommentBE } from "../../helpers/http";
import AddCommentModalScreen from "../../screens/AddCommentModalScreen";

interface DataItem {
  id: string;
  text: string;
}

type SwipeableListComponentProps = {
  items: {
    id: string;
    text: string;
  };
  customerId: string;
};

export default function SwipeableListComponent({
  items,
  customerId,
}: SwipeableListComponentProps) {
  const dataArray: DataItem[] = [];
  /* becouse of backend datatype needs to reconstruct  */
  for (const [id, text] of Object.entries(items)) {
    dataArray.push({ id, text });
  }

  const [data, setData] = useState<DataItem[]>(dataArray);

  const deleteItem = useCallback((commentId: string) => {
    deleteCommentBE(customerId, commentId);
    setData((prevData) => prevData.filter((item) => item.id !== commentId));
  }, []);

  const editItem = useCallback((id: string) => {
    Alert.alert(`Editing item with id ${id}`);
  }, []);

  const renderRightAction = useCallback(
    (item: DataItem) => (
      <TouchableOpacity
        onPress={() => deleteItem(item.id)}
        style={styles.rightAction}
      >
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    ),
    [deleteItem]
  );

  const renderLeftAction = useCallback(
    (item: DataItem) => (
      <TouchableOpacity
        onPress={() => editItem(item.id)}
        style={styles.leftAction}
      >
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
    ),
    [editItem]
  );

  const renderItem = useCallback(
    ({ item }: { item: DataItem }) => (
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SwipeableFlatList
        data={data}
        keyExtractor={(item) => item.id}
        enableOpenMultipleRows={false}
        renderItem={renderItem}
        renderLeftActions={renderLeftAction}
        renderRightActions={renderRightAction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 20,
    backgroundColor: "#fff",

    borderWidth: 2,
    marginBottom: 2,
    borderRadius: 18,
  },
  rightAction: {
    borderRadius: 18,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  leftAction: {
    borderRadius: 18,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20,
  },
});
