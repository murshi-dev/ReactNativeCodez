import React from "react";
import { Pressable, Text, View } from "react-native";
export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      {/* Screen Title */}
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10 }}>
        Profiles
      </Text>

      {/* Display the profile list */}
      <Pressable
        onPress={() =>
          navigation.navigate("Details", {
            name: "Ali",
            job: "Developer",
            description: "Builds Mobile Apps",
          })
        }
      >
        <Text style={{ fontSize: 20, color: "darkblue", textAlign: "center" }}>
          Ali
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          navigation.navigate("Details", {
            name: "John",
            job: "Designer",
            description: "Designs UI/UX",
          })
        }
      >
        <Text
          style={{
            fontSize: 20,
            color: "darkblue",
            textAlign: "center",
            padding: 10,
          }}
        >
          John
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          navigation.navigate("Details", {
            name: "Siti",
            job: "Manager",
            description: "Manages Projects",
          })
        }
      >
        <Text style={{ fontSize: 20, color: "darkblue", textAlign: "center" }}>
          Siti
        </Text>
      </Pressable>
    </View>
  );
}
