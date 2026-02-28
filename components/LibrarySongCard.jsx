import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function LibrarySongCard({ image, title, artist, date, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{artist}</Text>
        <Text style={styles.subtitle}>{date}</Text>
      </View>

        <View style={{flexDirection: "column", alignItems: 'flex-end', gap: 1, marginRight: 10}}>
          <Entypo name="dots-three-horizontal" size={16} color="gray" marginRight={12} />
        

            <View style={styles.appleLogo}>
                <AntDesign name="apple" size={12} color="white" />
                <Text style={{fontSize: 12, fontFamily: "Poppins-SemiBold", color: "white"}}>Music</Text>
            </View>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center", // ← keeps text vertically centered beside image
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginTop: 10,
  },
  textWrapper: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: "center",
    gap: 0,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  subtitle: {
    fontSize: 12,
    color: "#666666",
    fontFamily: "Poppins-Regular",
    marginTop: 2,
    lineHeight: 13,
  },
  appleLogo: {
    marginLeft: 10,
    marginRight: 5,
    marginTop: 23,
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
    width: 60,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#000000",
    justifyContent: "center",
    borderColor: "#000000",
  },
});