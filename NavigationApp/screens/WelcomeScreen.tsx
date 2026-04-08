import React from "react";
import { Pressable, Text, View } from "react-native";
export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      {/* display some text */}
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Welcome to the App
      </Text>
      {/* display a button --to move to next screen */}
      <Pressable onPress={() => navigation.navigate("Profiles")}>
        <Text style={{ fontSize: 20, color: "darkblue", textAlign: "center" }}>
          List Profiles
        </Text>
      </Pressable>
    </View>
  );
}
