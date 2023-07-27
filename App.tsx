import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomerListScreen from "./screens/CustomerListScreen";
import CustomerMainScreen from "./screens/CustomerMainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CustomerListScreen"
            component={CustomerListScreen}
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
