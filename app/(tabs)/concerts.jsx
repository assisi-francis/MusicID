import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignOutButton from "../../components/SignOutButton";


export default function Concerts() {
  return (
    <SafeAreaView style={{marginHorizontal: 30, marginTop: 20, flex: 1, backgroundColor: "#F5F5F5"}}>
         <SignOutButton
              style={{ position: "absolute", top: 40, right: 20 }}
          />
        <View>
            <Text>Concerts Screen</Text>
        </View>
    </SafeAreaView>
  );
}