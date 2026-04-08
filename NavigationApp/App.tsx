import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileDetailScreen from "./screens/ProfileDetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
//to control the stack process
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    //enables navigation process using Navigation Container
    <NavigationContainer>
      {/*manages multiple screens using Stack navigator*/}
      <Stack.Navigator>
        {/* display home screen using Stack Screen*/}
        <Stack.Screen name="Home" component={WelcomeScreen} />
        {/* display profile screen using Stack Screen */}
        <Stack.Screen name="Profiles" component={ProfileScreen} />
        {/* display description screen using Stack Screen */}
        <Stack.Screen name="Details" component={ProfileDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
