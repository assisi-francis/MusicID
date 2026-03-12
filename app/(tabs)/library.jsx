import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated, StyleSheet, Text, View, ScrollView } from "react-native";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarLabelCard from "../../components/AvatarLabelCard";
import LibrarySongCard from "../../components/LibrarySongCard";
import LineDivider from "../../components/LineDivider";
import SignOutButton from "../../components/SignOutButton";
import TabHeaderText from "../../components/TabHeaderText";

export default function Library() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const titleTranslateX = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 120],
    extrapolate: "clamp",
  });

  const subtitleOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.OverAllContainer}>

        <View style={styles.container}>
          <Animated.View
            style={{
              flexDirection: "column",
              transform: [{ translateX: titleTranslateX }],
            }}
          >
            <Animated.Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                fontFamily: "Poppins-ExtraBold",
              }}
            >
              Library
            </Animated.Text>
            <Animated.Text
              style={{
                fontSize: 14,
                color: "#666666",
                fontFamily: "Poppins-Medium",
                opacity: subtitleOpacity,
              }}
            >
              138 songs
            </Animated.Text>
          </Animated.View>

          <Animated.View style={{ opacity: headerOpacity }}>
            <SignOutButton />
          </Animated.View>
        </View>

        {/* Filter + Horizontal Scroll */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            width: "100%",
          }}
        >
          <View
            style={{
              marginTop: 20,
              gap: 20,
              borderRadius: 22,
              width: 50,
              height: 50,
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "#f7f3f3",
              padding: 10,
              borderWidth: 1,
              borderColor: "#E0E0E0",
            }}
          >
            <Ionicons name="filter-outline" size={28} color="black" />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 15, flexDirection: "row", gap: 18 }}
          >
            <AvatarLabelCard images={[require("../../assets/images/davido.jpg"), require("../../assets/images/simi.jpg")]} label="Artists" />
            <AvatarLabelCard images={[require("../../assets/images/simi.jpg"), require("../../assets/images/davido.jpg")]} label="Genres" style={{ marginLeft: 10 }} />
            <AvatarLabelCard images={[require("../../assets/images/davido.jpg"), require("../../assets/images/kissdaniel.jpg")]} label="Moods" style={{ marginLeft: 10 }} />
            <AvatarLabelCard images={[require("../../assets/images/davido.jpg"), require("../../assets/images/wizkid.jpg")]} label="Cities" style={{ marginLeft: 10 }} />
            <AvatarLabelCard images={[require("../../assets/images/davido.jpg"), require("../../assets/images/omalay.jpg")]} label="Decades" style={{ marginLeft: 10 }} />
          </ScrollView>
        </View>

        {/* Main Scrollable Content */}
        <Animated.ScrollView
          style={{ marginTop: 5 }}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <TabHeaderText title="Today" />
          <View style={styles.songGroup}>
            <LibrarySongCard image={require("../../assets/images/pic1.jpg")} title="Hold You (Hold Yuh)" artist="Gyptian" date="5 min ago" />
            <LineDivider />
            <LibrarySongCard image={require("../../assets/images/pic2.jpg")} title="Shape of You" artist="Ed Sheeran" date="10 min ago" />
            <LineDivider />
            <LibrarySongCard image={require("../../assets/images/pic3.jpg")} title="Blinding Lights" artist="The Weeknd" date="15 min ago" />
          </View>

          <TabHeaderText title="Tuesday" />
          <View style={styles.songGroup}>
            <LibrarySongCard image={require("../../assets/images/davido.jpg")} title="Hold You (Hold Yuh)" artist="Gyptian" date="5 min ago" />
            <LineDivider />
            <LibrarySongCard image={require("../../assets/images/omalay.jpg")} title="Shape of You" artist="Ed Sheeran" date="10 min ago" />
            <LineDivider />
            <LibrarySongCard image={require("../../assets/images/kissdaniel.jpg")} title="Blinding Lights" artist="The Weeknd" date="15 min ago" />
             <LineDivider />
            <LibrarySongCard image={require("../../assets/images/simi.jpg")} title="Blinding Lights" artist="The Weeknd" date="15 min ago" />
             <LineDivider />
            <LibrarySongCard image={require("../../assets/images/wizkid.jpg")} title="Blinding Lights" artist="The Weeknd" date="15 min ago" />
          </View>

        </Animated.ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OverAllContainer: {
    flex: 1,
    marginHorizontal: 18,
  },
  safeArea: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "#f2eeee",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    gap: 1,
  },
  songGroup: {
    marginTop: 10,
    gap: 8,
    borderRadius: 25,
    width: "100%",
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
  },
});