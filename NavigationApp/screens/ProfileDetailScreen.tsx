import React from "react";
import { Pressable, Text, View } from "react-native";
export default function ProfileDetailScreen({ route, navigation }: any) {
  //receive data from previous page/screen
  const { name, job, description } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10 }}>
        Profile Details
      </Text>

      {/* display data */}
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10 }}>
        Name: {name}
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10 }}>
        Job: {job}
      </Text>
      <Text style={{ fontSize: 20, textAlign: "center", padding: 10 }}>
        Description: {description}
      </Text>
      {/* go back button */}
      <Pressable onPress={() => navigation.goBack()}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            padding: 10,
            color: "blue",
          }}
        >
          Go Back
        </Text>
      </Pressable>
    </View>
  );
}
