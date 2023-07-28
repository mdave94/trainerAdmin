import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomerListScreen from "./screens/CustomerListScreen";
import CustomerMainScreen from "./screens/CustomerMainScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          drawerLabel: "All Customer",
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black", // Change the header color to blue
          },
          headerTintColor: "white", // Change the text color of header buttons
        }}
        name="CustomerListScreen"
        component={CustomerListScreen}
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
            name="CustomerMainScreen"
            component={CustomerMainScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
