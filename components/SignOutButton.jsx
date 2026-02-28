import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

export default function SignOutButton({ style }) {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => signOut(auth)}
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      activeOpacity={0.7}
      style={[
        styles.signOutButton,
        active && styles.signOutButtonActive,
        style, // allows custom positioning
      ]}
    >
      <Text style={styles.signOutText}>Sign Out</Text>
      <FontAwesome name="sign-out" size={18} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#3737a9",
    borderRadius: 999,
    elevation: 5,
  },

  signOutButtonActive: {
    backgroundColor: "#4b33b5",
  },

  signOutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});