import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomerListScreen from "./screens/CustomerListScreen";
import CustomerMainScreen from "./screens/CustomerMainScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IconButton from "./components/UI/IconButton";
import ManageMemberships from "./screens/ManageMemberships";
import AddCustomerScreen from "./screens/AddCustomerScreen";
import SettingsScreen from "./screens/SettingsScreen";
import QuickEdit from "./screens/QuickEdit";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          drawerLabel: "All Customer",
          drawerIcon: () => (
            <IconButton iconName="people-outline" size={32} color="black" />
          ),

          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
        name="CustomerListScreen"
        component={CustomerListScreen}
      />

      <Drawer.Screen
        options={{
          drawerLabel: "Add Customer",
          drawerIcon: () => (
            <IconButton
              iconName="ios-person-add-outline"
              size={32}
              color="black"
            />
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
        name="AddCustomer"
        component={AddCustomerScreen}
      />

      <Drawer.Screen
        options={{
          drawerLabel: "Edit Memberships",
          drawerIcon: () => (
            <IconButton iconName="albums-outline" size={32} color="black" />
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
        name="Memberships"
        component={ManageMemberships}
      />

      <Drawer.Screen
        options={{
          drawerLabel: "Settings",
          drawerIcon: () => (
            <IconButton iconName="settings-outline" size={32} color="black" />
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerTitle: "" }}
            name="CustomerMainScreen"
            component={CustomerMainScreen}
          />
          <Stack.Screen
            name="QuickEdit"
            component={QuickEdit}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
