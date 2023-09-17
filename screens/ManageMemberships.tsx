import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import MembershipTypeCard from "../components/UI/MembershipTypeCard";

type ManageMembershipsProps = {};

function ManageMemberships(params: ManageMembershipsProps) {
  function addMembershipHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.button}></View>
      <CustomButton>Bérlettípus Hozzáada</CustomButton>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
        <View style={styles.cardContainer}>
          <MembershipTypeCard />
        </View>
      </ScrollView>
    </View>
  );
}

export default ManageMemberships;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    marginVertical: 10,
  },
  button: {
    marginTop: 32,
  },
});
