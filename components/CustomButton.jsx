import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton({ 
  title = "Get Started", 
  onPress, 
  backgroundColor = '#685CF0',
  textColor = "black" // Default text color is black
}) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: backgroundColor }]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});