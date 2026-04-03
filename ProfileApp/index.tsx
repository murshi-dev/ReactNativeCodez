import { FlatList, Image, StyleSheet, Text, View } from "react-native";
export default function Home() {
  const people = [
    {
      id: "1",
      pname: "Jordan Lee",
      ptitle: "Mobile App Developer",
      stitle: "Team Lead",
      image: require("../assets/images/person1.png"),
      descr: "Jordan is the Team Lead leading mobile app develpment",
    },
    {
      id: "2",
      pname: "Amir Ali",
      ptitle: "UI Designer",
      stitle: "Senior Designer",
      image: require("../assets/images/person1.png"),
      descr: "Amir is the Senior Designer for mobile app develpment",
    },
  ];

  return (
    <FlatList
      data={people}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.title}>{item.pname}</Text>
          <Text style={styles.subtitle}>{item.ptitle}</Text>
          <Text style={styles.jobtitle}>{item.stitle}</Text>
          <Image source={item.image} style={styles.images} />
          <Text style={styles.desc}>{item.descr}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: "purple",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 600,
    color: "darkblue",
  },
  jobtitle: {
    fontSize: 20,
    color: "gray",
  },
  images: {
    width: 100,
    height: 100,
  },
  desc: {
    fontSize: 15,
    textAlign: "center",
  },
});
