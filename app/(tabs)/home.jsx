import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Animated, ScrollView } from "react-native";
import { useEffect, useRef, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import SongCard from "../../components/SongCard";
import SignOutButton from "../../components/SignOutButton";
import { auth } from "../../config/firebase"; 
import { onAuthStateChanged, reload } from "firebase/auth";
import { useLocalSearchParams } from "expo-router"; 

export default function Home() {
  
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const user = auth.currentUser;  // get current logged in user
  const { displayName: paramName } = useLocalSearchParams();
  const [userName, setUserName] = useState(paramName || "");

   // useEffect to listen for auth state
   useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      await reload(user);
      await reload(auth.currentUser); // 👈 double reload ensures fresh data
      const freshUser = auth.currentUser;
      const name = freshUser?.displayName || freshUser?.email?.split("@")[0] || "User";
      console.log("Final name:", name);
      setUserName(name);
    }
  });
  return unsubscribe;
}, []);

   useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.1, duration: 800, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    );
    animation.start();
    return () => animation.stop(); // 👈 cleanup on unmount
  }, []); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.topBar}>
          <View>
            <Text style={styles.greetingText}>Hello </Text>
            <Text style={styles.nameText}>{userName}</Text>
          </View>
          <SignOutButton />
        </View>

        <Text style={styles.textTile}>Tap to ID Song</Text>

        <Animated.View style={[styles.iconWrapper, { transform: [{ scale: scaleAnim }] }]}>
          <Fontisto name="shazam" size={280} color="#685CF0" style={{ marginTop: -5, width: 300, height: 300 }} />
        </Animated.View>

        <View style={styles.recentWrapper}>
          <Text style={styles.recentText}>Recently Found</Text>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <SongCard image={require("../../assets/images/pic1.jpg")} time="5 min ago" title="Hold You (Hold Yuh)" artist="Gyptian" />
            <SongCard image={require("../../assets/images/pic2.jpg")} time="10 min ago" title="Shape of You" artist="Ed Sheeran" />
            <SongCard image={require("../../assets/images/pic3.jpg")} time="15 min ago" title="Blinding Lights" artist="The Weeknd" />
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
  topBar: {
    position: "absolute",
    top: 10,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",  // name on left, signout on right
    alignItems: "center",
  },
  greetingText: {
    color: "#c5c5e5",
    fontSize: 13,
    fontFamily: "Poppins-Light",
  },
  nameText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Poppins-Light",
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
    position: "absolute",
    bottom: 75,
    width: "100%",
  },
});