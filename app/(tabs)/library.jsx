import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AvatarLabelCard from "../../components/AvatarLabelCard";
import LibrarySongCard from "../../components/LibrarySongCard";
import LineDivider from "../../components/LineDivider";
import SignOutButton from "../../components/SignOutButton";
import TabHeaderText from "../../components/TabHeaderText";

export default function Library() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.OverAllContainer}>
        <View style={styles.container}>
          <View style={styles.textWrapper}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "bold",
                fontFamily: "Poppins-ExtraBold",
              }}
            >
              Library
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666666",
                fontFamily: "Poppins-Medium",
              }}
            >
              138 songs
            </Text>
          </View>

          <SignOutButton />
        </View>

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
            <AvatarLabelCard
              images={[
                require("../../assets/images/davido.jpg"),
                require("../../assets/images/simi.jpg"),
              ]}
              label="Artists"
            />

            <AvatarLabelCard
              images={[
                require("../../assets/images/simi.jpg"),
                require("../../assets/images/davido.jpg"),
              ]}
              label="Genres"
              style={{ marginLeft: 10 }}
            />
            <AvatarLabelCard
              images={[
                require("../../assets/images/davido.jpg"),
                require("../../assets/images/kissdaniel.jpg"),
              ]}
              label="Moods"
              style={{ marginLeft: 10 }}
            />
            <AvatarLabelCard
              images={[
                require("../../assets/images/davido.jpg"),
                require("../../assets/images/wizkid.jpg"),
              ]}
              label="Cities"
              style={{ marginLeft: 10 }}
            />
            <AvatarLabelCard
              images={[
                require("../../assets/images/davido.jpg"),
                require("../../assets/images/omalay.jpg"),
              ]}
              label="Decades"
              style={{ marginLeft: 10 }}
            />
          </ScrollView>
        </View>

        <ScrollView style={{ marginTop: 5 }}>
          <TabHeaderText title="Today" />
          <View
            style={{
              marginTop: 10,
              gap: 8,
              borderRadius: 25,
              width: "100%",
              borderBlockColor: "#E0E0E0",
              paddingLeft: 10,
              paddingBottom: 10,
              backgroundColor: "#ffffff",
            }}
          >
            <LibrarySongCard
              image={require("../../assets/images/pic1.jpg")}
              title="Hold You (Hold Yuh)"
              artist="Gyptian"
              date="5 min ago"
              style={{ marginTop: 0 }}
            />

            <LineDivider />

            <LibrarySongCard
              image={require("../../assets/images/pic2.jpg")}
              title="Shape of You"
              artist="Ed Sheeran"
              date="10 min ago"
              style={{ marginTop: 1 }}
            />
            <LineDivider />

            <LibrarySongCard
              image={require("../../assets/images/pic3.jpg")}
              title="Blinding Lights"
              artist="The Weeknd"
              date="15 min ago"
              style={{ marginTop: 1 }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OverAllContainer: {
    flex: 1,
    marginHorizontal: 18,
    // backgroundColor: "#e5e1e1",
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

    gap: 1,
  },
  textWrapper: {
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    paddingTop: 10,
  },
});

//
