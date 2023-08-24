import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../UI/GlobalStyles";
import React, { createRef, useRef } from "react";
import ActionSheet from "react-native-actions-sheet";
import { SheetProps } from "react-native-actions-sheet";
import QuickEdit from "../../screens/QuickEdit";

type CustomerListViewItemProps = {
  data: {
    id: string;
    name: string;
    nickname: string;
    birthday: string;
    phoneNumber: string;
    email: string;
    membershipType: string;
    commentLogs: string[];
  };
  navigation: any;
};

function CustomerListViewItem({ data, navigation }: CustomerListViewItemProps) {
  const actionSheetRef = useRef<any | null>(null);

  const handleCustomerPress = () => {
    navigation.navigate("CustomerMainScreen", { customerData: data });
  };

  function hasMembership() {
    const getstyle =
      data.membershipType !== "" ? styles.hasMembership : styles.noMembership;
    return getstyle;
  }

  const handleLongPress = () => {
    if (data.membershipType !== "") {
      if (actionSheetRef.current) {
        (actionSheetRef.current as any).show();
      }
    }
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={handleCustomerPress}
        onLongPress={handleLongPress}
      >
        <View style={[styles.item, hasMembership()]}>
          <Text style={[styles.text, hasMembership()]}>{data.name}</Text>
          {data.nickname !== "" && (
            <Text style={[styles.text]}>({data.nickname})</Text>
          )}

          <View>
            <Text>{data.membershipType}</Text>
          </View>
        </View>
      </Pressable>

      <ActionSheet
        gestureEnabled={true}
        ref={actionSheetRef}
        overlayColor="rgba(0, 0, 0, 0.7)"
        containerStyle={styles.actionSheetContainer}
      >
        <View style={styles.actionSheetContent}>
          <QuickEdit customer={data} />
        </View>
      </ActionSheet>
    </View>
  );
}

export default CustomerListViewItem;

const styles = StyleSheet.create({
  actionSheetContainer: {
    borderRadius: 42,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    backgroundColor: "white",
  },

  actionSheetContent: {
    justifyContent: "center",
    alignItems: "center",

    padding: 20,
    borderRadius: 42,
  },
  item: {
    borderRadius: 12,
    width: 120,
    height: 170,
    margin: 14,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  noMembership: {
    backgroundColor: GlobalStyles.colors.blue,
  },
  hasMembership: {
    backgroundColor: GlobalStyles.colors.yellow,
    color: "black",
  },
});
