import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import InputText from "../../components/InputText";
import { Alert } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleReset = async () => {
    if (email.trim() === "") {
      setError("Email cannot be empty.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Check your email",
        "We sent you a password reset link."
      );
      router.back();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.replace("/welcome")} style={styles.backButton}>
        <AntDesign name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password</Text>

      <Text style={styles.text}>
        Input your linked email to your Music ID account below, we’ll send you a link
      </Text>

      <InputText
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <CustomButton
        title="Continue"
        onPress={handleReset}
        backgroundColor="#685CF0"
        textColor="white"
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 30,
    textAlign: "center",
  },
  backButton: {
  position: "absolute",
  top: 60,      // adjust for status bar / safe area
  left: 20,
  padding: 5,
  zIndex: 1,
},
 text: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    textAlign: 'justify',
    marginBottom: 20,
  },
  errorText: {
  color: "red",
  fontSize: 14,
  fontFamily: "Poppins-Regular",
  marginBottom: 10,
  marginTop: -10,
},
});