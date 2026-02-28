import { View, Text, StyleSheet } from "react-native";
import StackedAvatars from "./StackedAvatars";

export default function AvatarLabelCard({ images, label, style }) {
  return (
    <View style={[styles.container, style]}>
      <StackedAvatars images={images} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
    borderRadius: 22,
    width: 120,
    height: 50,
    backgroundColor: "#f7f3f3",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Poppins-Medium",
    marginTop: 2,
    textAlign: "center"
  },
});
