import { View, Text, ScrollView, TouchableOpacity, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import SignOutButton from "../../components/SignOutButton";
import TabHeaderText from "../../components/TabHeaderText";
import AntDesign from '@expo/vector-icons/AntDesign';
import ConcertCard from "../../components/ConcertCard";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Concerts() {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Fade out header elements as user scrolls
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // Slide title to center as user scrolls
  const titleTranslateX = scrollY.interpolate({
    inputRange: [0, 60],
    outputRange: [0, 100],  // adjust based on your layout
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#f2eeee" }}>
      <SafeAreaView style={{ marginHorizontal: 30, marginTop: 20, flex: 1, backgroundColor: "#f2eeee" }}>
        
        {/* Header */}
        <View style={styles.container}>

          {/* Title animates to center */}
          <Animated.Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              fontFamily: "Poppins-ExtraBold",
              transform: [{ translateX: titleTranslateX }],
            }}
          >
            Concerts
          </Animated.Text>

          {/* SignOut fades out on scroll */}
          <Animated.View style={{ opacity: headerOpacity }}>
            <SignOutButton />
          </Animated.View>

        </View>

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 5 }}
          contentContainerStyle={{ gap: 1, paddingBottom: 10 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >

          <TabHeaderText title="Saved" />
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity style={styles.savedContainer}>
              <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: "#9b9393" }}>
                Concerts you saved will show up here
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10 }}>
            <TouchableOpacity style={styles.upComingContainer}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <AntDesign name="calendar" size={28} color="#3737a9" />
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold", fontFamily: "Poppins-SemiBold", color: "#3c3c3e" }}>
                    Upcoming Concerts
                  </Text>
                  <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium", color: "#a9a3a3" }}>
                    Browse all upcoming shows
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: -10 }}>
            <TabHeaderText title="Popular" />
            <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular", color: "#9b9393" }}>
              The most popular upcoming concerts
            </Text>
          </View>

          <View style={{ marginTop: 1, flexDirection: "row", gap: 10 }}>
            <ConcertCard image={require("../../assets/images/concert1.jpg")} dateRange="4 Mar - 30 Aug" artistName="Snoop Dog" location="No events in Nigeria" />
            <ConcertCard image={require("../../assets/images/concert2.jpg")} dateRange="10 Apr - 15 Sep" artistName="Nas" location="Lagos, Nigeria" />
          </View>
          <View style={{ marginTop: 1, flexDirection: "row", gap: 10 }}>
            <ConcertCard image={require("../../assets/images/concert3.jpg")} dateRange="4 Mar - 30 Aug" artistName="Davido" location="No events in Nigeria" />
            <ConcertCard image={require("../../assets/images/concert4.jpg")} dateRange="10 Apr - 15 Sep" artistName="Drake" location="Lagos, Nigeria" />
          </View>
          <View style={{ marginTop: 1, flexDirection: "row", gap: 10 }}>
            <ConcertCard image={require("../../assets/images/concert5.jpg")} dateRange="4 Mar - 30 Aug" artistName="Rema" location="No events in Nigeria" />
            <ConcertCard image={require("../../assets/images/concert6.jpg")} dateRange="10 Apr - 15 Sep" artistName="Tems" location="Lagos, Nigeria" />
          </View>
          <View style={{ marginTop: 1, flexDirection: "row", gap: 10 }}>
            <ConcertCard image={require("../../assets/images/concert7.jpg")} dateRange="4 Mar - 30 Aug" artistName="Ayra Starr" location="No events in Nigeria" />
            <ConcertCard image={require("../../assets/images/concert8.jpg")} dateRange="10 Apr - 15 Sep" artistName="Burna Boy" location="Lagos, Nigeria" />
          </View>
          <View style={{ marginTop: 1, flexDirection: "row", gap: 10 }}>
            <ConcertCard image={require("../../assets/images/concert9.jpg")} dateRange="4 Mar - 30 Aug" artistName="Ayra Starr" location="No events in Nigeria" />
            <ConcertCard image={require("../../assets/images/concert10.jpg")} dateRange="10 Apr - 15 Sep" artistName="Burna Boy" location="Lagos, Nigeria" />
          </View>

          <View style={{ marginTop: 40, marginBottom: 70 }}>
            <TouchableOpacity style={{ backgroundColor: "#685CF0", padding: 10, borderRadius: 25, borderStyle: 'solid', borderWidth: 1, borderColor: "#ccc", width: "100%", height: 55, alignItems: "center", justifyContent: "center" }}>
              <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Ionicons name="search" size={20} color="white" />
                <Text style={{ fontSize: 16, fontFamily: "Poppins-SemiBold", color: "#ffffff" }}>Find a Concert</Text>
              </View>
            </TouchableOpacity>
          </View>

        </Animated.ScrollView>

      </SafeAreaView>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 1,
    paddingTop: 10,
  },
  savedContainer: {
    backgroundColor: "#eae5e5",
    padding: 20,
    borderRadius: 25,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    height: 80,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  upComingContainer: {
    backgroundColor: "#efecec",
    padding: 20,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginBottom: 10,
    height: 80,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
};