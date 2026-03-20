import { Keyboard, Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import CustomButton from "../components/CustomButton";
import { router, useRouter } from "expo-router";


export default function Index()  {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{marginHorizontal: 30, marginTop: 20, flex: 1, backgroundColor: "#F5F5F5"}}>
            <Image source={require("../assets/images/success.png")} style={styles.image} />
            
            <View style={styles.container}>
                <Text style={styles.textTitle}>Are you ready to ID and Stream your favorite songs?</Text>
                <Text style={styles.text}>Welcome to the best Music Identification App in the world. Your number stop avenue to identify and store your music</Text>
            </View>
            <View style={{marginTop: 35, flexDirection: "column", gap: 20}}>

                <CustomButton 
                title="Continue" 
                onPress={() => router.push("/welcome")} 
                textColor="white"
                />
            </View>

        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 440,
    borderRadius: 20,
    marginBottom: 20,
    contentFit: 'stretch',
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: 'justify',
  },
});