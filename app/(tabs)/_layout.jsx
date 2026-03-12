import { Tabs } from "expo-router";
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet } from "react-native";



export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#685CF0",
        tabBarItemStyle: { alignItems: "center", justifyContent: "center" },
        tabBarLabelStyle: { fontSize: 10, textAlign: "center", fontFamily: "Poppins-Regular" },
        tabBarIconStyle: { marginBottom: -2 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Fontisto name="shazam" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Entypo name="folder-music" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="concerts"
        options={{
          title: "Concerts",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="map-location-dot" size={20} color={color} />
          ),
        }}
      />
    <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
        <Ionicons name="search" size={20} color={color} />
          ),
        }}
      />

    </Tabs>

  );
}


const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    right: 15,
    marginHorizontal: 20,
    height: 60,
    width: "90%",
    borderRadius: 30,
    backgroundColor: "#d7d7dd",
    // borderTopWidth: 0,
    elevation: 10,
  },
});