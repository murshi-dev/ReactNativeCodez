import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
export default function App() {
  //declare a variable using the hook to manage counter value
  const [count, setCount] = useState(0);
  return (
    <View>
      {/* display counter value */}
      <Text style={{ fontSize: 20 }}>Count: {count}</Text>

      {/* Increase Counter */}
      {/* logic to update counter --event handling */}
      <Pressable
        onPress={() => setCount(count + 1)}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "darkblue" : "blue",
          padding: 10,
          marginTop: 10,
        })}
        disabled={count == 5}
      >
        <Text style={{ color: "white" }}>Increase Counter</Text>
      </Pressable>

      {/* Decrease Counter */}
      <Pressable
        onPress={() => setCount(count - 1)}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "darkred" : "red",
          padding: 10,
          marginTop: 10,
        })}
        disabled={count == 0}
      >
        <Text style={{ color: "white" }}>Decrease Counter</Text>
      </Pressable>

      {/* Reset Counter */}
      <Pressable
        onPress={() => setCount(0)}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "gray" : "black",
          padding: 10,
          marginTop: 10,
        })}
      >
        <Text style={{ color: "white" }}>Reset Counter</Text>
      </Pressable>
    </View>
  );
}
