import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { useColorScheme, Animated, Image } from "react-native";
import useAuth from "../hooks/useAuth";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [appReady, setAppReady] = useState(false);
  const opacity = useRef(new Animated.Value(1)).current; 

  const [loaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().then(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start(() => {
          console.log("Splash done"); 
          setAppReady(true);
        });
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (!appReady) return; 
    if (loading) return;
    if (user) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/");
    }
  }, [user, loading, appReady]); 

  if (!appReady || !loaded || loading) {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colorScheme === "dark" ? "#473cd9" : "#ffffff",
        }}
      >
        <Image
          source={
            colorScheme === "dark"
              ? require("../assets/images/splash-dark.png")
              : require("../assets/images/splash-light.png")
          }
          style={{ width: 200, height: 200, resizeMode: "contain" }} // 👈 fix 4: contentFit is expo-image only, use resizeMode for react-native Image
        />
      </Animated.View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}