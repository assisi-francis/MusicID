import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#e8e5e5",
        }}
      >
        <View style={styles.mainContainer}>
            <Image
              source={require("../assets/images/mypic.png")}
              style={styles.image}
            />

            <View style={styles.container}>
              <Text style={styles.textTitle}>Welcome to Don Music ID</Text>
              <Text style={styles.text}>
                Welcome to the best Music Identification App in the world. Your
                number stop avenue to identify and store your music
              </Text>
            </View>
            <View style={{ marginTop: 35, flexDirection: "column", gap: 20 }}>
              <CustomButton
                title="Get Started | Sign Up"
                onPress={() => router.push("/(auth)/SignUpScreen")}
                textColor="white"
              />

              <CustomButton
                title="Sign In"
                onPress={() => router.push("/(auth)/SignInScreen")}
                backgroundColor="#ffff"
                textColor="#7D7E83"
              />
            </View>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  image: {
    width: 330,
    height: 385,
    borderRadius: 20,
    marginBottom: 20,
    contentFit: "cover",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 26,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textAlign: "justify",
  },
});
