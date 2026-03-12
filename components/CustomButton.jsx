import React from "react";
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native"; // 👈 add ActivityIndicator

export default function CustomButton({ 
  title = "Get Started", 
  onPress, 
  backgroundColor = '#685CF0',
  textColor = "black",
  loading = false,        // 👈 new prop with default false
  disabled = false,       // 👈 new prop with default false
}) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor: loading ? "#9b93f5" : backgroundColor }, // 👈 dims when loading
      ]} 
      onPress={onPress}
      disabled={loading || disabled} // 👈 prevents double tap
    >
      {loading ? (
        <ActivityIndicator size="small" color="#ffffff" /> // 👈 spinner replaces text
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
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