import { View, Text, Image, StyleSheet } from "react-native";

export default function SongCard({ image, time, title, artist }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3737a9",
    padding: 10,
    borderRadius: 30,
    marginRight: 15,
    width: 330,
    height: 100,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 10,
  },
  time: {
    color: "#9d98b5",
    fontSize: 11,
    fontFamily: "Poppins-Regular",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
  },
  artist: {
    color: "#b0b0c7",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
});
