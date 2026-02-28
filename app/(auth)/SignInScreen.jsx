import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import InputText from "../../components/InputText";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"; 

export default function SignInScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passError, setPassError] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleSignIn = async () => {
    let valid = true;

    if (email.trim() === "") {
      setError("Email cannot be empty.");
      valid = false;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      valid = false;
    } else {
      setError("");
    }

    if (password.trim() === "") {
      setPassError("Password cannot be empty.");
      valid = false;
    } else if (password.length < 8) {
      setPassError("Password must be at least 8 characters.");
      valid = false;
    } else {
      setPassError("");
    }

    if (!valid) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // navigate to screen in app folder
      router.replace("/(tabs)/home"); 
     

    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign In</Text>

      <InputText
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <InputText
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passError ? <Text style={styles.errorText}>{passError}</Text> : null}

      <CustomButton
        title="Sign In"
        onPress={handleSignIn}
        backgroundColor="#685CF0"
        textColor="white"
      />

      <CustomButton
        title="Forgot Password?"
        onPress={() => router.push("/(auth)/ForgotPasswordScreen")}
        backgroundColor="#ffffff"
        textColor="gray"
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

  footerText: {
    marginTop: 15,
    textAlign: "center",
    color: "#685CF0",
  },
  backButton: {
  position: "absolute",
  top: 60,      // adjust for status bar / safe area
  left: 20,
  padding: 5,
  zIndex: 1,
},
errorText: {
  color: "red",
  fontSize: 14,
  fontFamily: "Poppins-Regular",
  marginBottom: 10,
  marginTop: -10,
},
});