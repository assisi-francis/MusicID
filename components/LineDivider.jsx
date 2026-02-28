import { View, StyleSheet } from "react-native";

export default function LineDivider({ style }) {
  return <View style={[styles.divider, style]} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "#e8e2e2",
    marginTop: 8,
    width: "78%",
    alignSelf: 'flex-end',
  },
});