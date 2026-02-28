import { View, Text, StyleSheet } from "react-native";

export default function TabHeaderText({ title, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    color: "#050505",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});