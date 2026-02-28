import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Animated, ScrollView, Image } from "react-native";
import { useEffect, useRef, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import SongCard from "../../components/SongCard";
import SignOutButton from "../../components/SignOutButton";


export default function Home() {

    const [active, setActive] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1, // expand
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // shrink back
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <SignOutButton
            style={{ position: "absolute", top: 20, right: 20 }}
        />

        <Text style={styles.textTile}>Tap to ID Song</Text>

        <Animated.View style={[styles.iconWrapper, { transform: [{ scale: scaleAnim }] }]}>
          <Fontisto name="shazam" size={280} color="#685CF0" style={{ marginTop: -5, width: 300, height: 300 }} />
        </Animated.View>

        <View style={styles.recentWrapper}>
            <Text style={styles.recentText}>
                Recently Found
            </Text>
        </View>
        <View style={styles.scrollContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20}}>
               <SongCard
                image={require("../../assets/images/pic1.jpg")}
                time="5 min ago"
                title="Hold You (Hold Yuh)"
                artist="Gyptian"
                />
                <SongCard
                image={require("../../assets/images/pic2.jpg")}
                time="10 min ago"
                title="Shape of You"
                artist="Ed Sheeran"
                />
                <SongCard
                image={require("../../assets/images/pic3.jpg")}
                time="15 min ago"
                title="Blinding Lights"
                artist="The Weeknd"
                />
            </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#473cd9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTile: {
    fontSize: 20,
    top: 0,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 40,
    color: "#fff",
  },
  iconWrapper: {
    width: 280,
    height: 280,
    borderRadius: 150,
    borderColor: "#685CF0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  recentWrapper: {
  width: "100%",
  marginTop: 10,
  paddingHorizontal: 20,
  alignSelf: "flex-start",
},

recentText: {
  color: "#b0b0c7",
  fontSize: 16,
  fontFamily: "Poppins-Regular",
  textAlign: "left",
},
scrollContainer: {
    position: "absolute", bottom: 75, width: "100%",
  },
signOutButton: {
  position: "absolute",
  top: 40,
  right: 20,
  flexDirection: "row",
  alignItems: "center",
  gap: 6, // spacing between text & icon
  paddingHorizontal: 14,
  paddingVertical: 8,
  backgroundColor: "#6345dc",
  borderRadius: 999, // full pill
  elevation: 5,
},

signOutButtonActive: {
  backgroundColor: "#4b33b5", // darker on press
},

signOutText: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 14,
},

});

