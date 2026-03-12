import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import SignOutButton from "../../components/SignOutButton";
import TabHeaderText from "../../components/TabHeaderText";

export default function Search() {
  return (
    <SafeAreaView style={{ marginHorizontal: 30, marginTop: 20, flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={{ fontSize: 28, fontWeight: "bold", fontFamily: "Poppins-ExtraBold" }}>
            Search
          </Text>
        </View>
        <SignOutButton />
      </View>

      <TabHeaderText title="Discover" />

      <View style={{ marginTop: 5 }}>
        <TouchableOpacity activeOpacity={0.9} style={{ borderRadius: 25, overflow: "hidden" }}>
          
          {/* Background Image */}
          <ImageBackground
            source={require("../../assets/images/world.png")} // 👈 change to your image
            style={styles.discoverContainer}
            imageStyle={{ borderRadius: 25 }}
          >
            {/* Gradient overlay on top of image */}
            <LinearGradient
              colors={["transparent", "rgb(16, 11, 161)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold", fontFamily: "Poppins-SemiBold", color: "#ffffff" }}>
                SongID Charts
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", color: "#ffffff" }}>
                The week's top songs around the world
              </Text>
            </LinearGradient>

          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity activeOpacity={0.9} style={{ borderRadius: 25, overflow: "hidden" }}>
          
          {/* Background Image */}
          <ImageBackground
            source={require("../../assets/images/radio.png")} // 👈 change to your image
            style={styles.discoverContainer}
            imageStyle={{ borderRadius: 25 }}
          >
            {/* Gradient overlay on top of image */}
            <LinearGradient
              colors={["transparent", "rgb(91, 86, 236)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold", fontFamily: "Poppins-SemiBold", color: "#ffffff" }}>
                Radio Spins
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", color: "#a5b0e6" }}>
                Songs getting the most radio plays worldwide
              </Text>
            </LinearGradient>

          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10 }}>
        <TouchableOpacity activeOpacity={0.9} style={{ borderRadius: 25, overflow: "hidden" }}>
          
          {/* Background Image */}
          <ImageBackground
            source={require("../../assets/images/concert.png")} // 👈 change to your image
            style={styles.discoverContainer}
            imageStyle={{ borderRadius: 25 }}
          >
            {/* Gradient overlay on top of image */}
            <LinearGradient
              colors={["transparent", "rgb(213, 44, 6)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <Text style={{ fontSize: 17, fontWeight: "bold", fontFamily: "Poppins-SemiBold", color: "#ffffff" }}>
                Concerts
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", color: "#f5ded9" }}>
                Find live music events
              </Text>
            </LinearGradient>

          </ImageBackground>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 1,
  },
  textWrapper: {
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    paddingTop: 10,
  },
  discoverContainer: {
    height: 120,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "flex-end", 
  },
  gradient: {
    padding: 20,
    paddingTop: 55,
    justifyContent: "flex-end",
    gap: 4,
  },
};