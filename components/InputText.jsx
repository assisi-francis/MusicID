import { useState } from "react";
import { memo } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default memo(InputText);

  function InputText({
  placeholder,
  value,
  onChangeText,
  style,
  keyboardType,
  isValid,          // pass true/false/null from parent
  secureTextEntry,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = !!secureTextEntry;

  return (
    <View style={[styles.container, style, 
        isValid === false && { borderColor: "red" },
        isValid === true && { borderColor: "#685CF0" },
        { flexDirection: "row", alignItems: "center" }
        
    ]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && !showPassword}
        style={[styles.input,{flex: 1}, (isPassword || isValid !== null) && { paddingRight: 10 }]}
      />

      {/* ✅ Green check for valid input */}
      {isValid === true && !isPassword && (
        <AntDesign
          name="check-circle"
          size={20}
          color="green"
          style={styles.icon}
        />
      )}

      {/* 👁 Eye toggle for password */}
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <AntDesign
            name={showPassword ? "eye" : "eye-invisible"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    height: "100%",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: 12,
    top: "50%",
    marginTop: -10,
  },
});