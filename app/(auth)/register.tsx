import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

//Themed Components
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedTextInput from "../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, register } = useUser();
  const handleSubmit = async () => {
    try {
      console.log("Register Pressed", email, password);
      register({ email, password });
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register To Your Account
        </ThemedText>
        <Spacer />
        <ThemedTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <ThemedTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href="/login">
          <ThemedText style={{ textAlign: "center" }}>Login</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
