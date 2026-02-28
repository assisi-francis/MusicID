import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import InputText from "../../components/InputText";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignUpScreen() {
  const router = useRouter();

  const [fname, setFname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");

  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleSignUp = async () => {
    let valid = true;

    // Email
    if (email.trim() === "") {
      setError("Email cannot be empty.");
      valid = false;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      valid = false;
    } else {
      setError("");
    }

    // Password
    if (password.trim() === "") {
      setPassError("Password cannot be empty.");
      setPasswordValid(false);
      valid = false;
    } else if (password.length < 8) {
      setPassError("Password must be at least 8 characters.");
      setPasswordValid(false);
      valid = false;
    } else {
      setPassError("");
      setPasswordValid(true);
    }

    // Confirm password
    if (passwordConfirm.trim() === "") {
      setPassError("Please confirm your password.");
      setConfirmPasswordValid(false);
      valid = false;
    } else if (passwordConfirm !== password) {
      setPassError("Passwords do not match.");
      setConfirmPasswordValid(false);
      valid = false;
    } else {
      setConfirmPasswordValid(true);
    }

    if (!valid) return;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // 👉 Navigate to app home
      router.replace("/WelcomeScreen");
      // OR: router.replace("/(tabs)/home");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>

      <InputText placeholder="First Name" value={fname} onChangeText={setFname} />
      <InputText placeholder="Surname" value={surname} onChangeText={setSurname} />

      <InputText
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setEmailValid(text.trim() === "" ? null : validateEmail(text));
        }}
        keyboardType="email-address"
        isValid={emailValid}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <InputText
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordValid(text.trim() === "" ? null : text.length >= 8);
        }}
        secureTextEntry
        isValid={passwordValid}
      />

      <InputText
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChangeText={(text) => {
          setPasswordConfirm(text);
          setConfirmPasswordValid(text === password);
        }}
        secureTextEntry
        isValid={confirmPasswordValid}
      />

      {confirmPasswordValid === false && (
        <Text style={styles.errorText}>{passError}</Text>
      )}

      <CustomButton
        title="Create Account"
        onPress={handleSignUp}
        backgroundColor="#685CF0"
        textColor="white"
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