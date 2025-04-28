import { StyleSheet, Pressable,Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Link } from "expo-router";
import { Colors } from '../../constants/Colors';

//Themed Components
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from '../components/ThemedButton';
import ThemedTextInput from '../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, login} = useUser();

  const handleSubmit = () => {
    try {
      console.log("Current User: ", user);
      console.log("Login Pressed", email, password);
      login({email, password});
      console.log("User logged in successfully", user);
    } catch (error) {
      console.error("Error logging in user: ", error);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Login To Your Account</ThemedText>
        <Spacer/>
        <ThemedTextInput placeholder='Email' style={{width:'80%', marginBottom:20}} keyboardType='email-address' value={email} onChangeText={setEmail}/>
        <ThemedTextInput placeholder='Password' style={{width:'80%', marginBottom:20}} secureTextEntry value={password} onChangeText={setPassword}/>
        <ThemedButton onPress={handleSubmit}>
          <Text style={{color:'#f2f2f2'}}>Login</Text>
        </ThemedButton>
        <Spacer height={100}/>
        <Link href="/register">
        <ThemedText style={{textAlign: 'center'}}>Register</ThemedText>
        </Link>
        <Spacer/>
        <Link href="/profile">
        <ThemedText style={{textAlign: 'center'}}>Profile</ThemedText>
        </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

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
      btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
      },
      pressed: {
        opacity: 0.8
      }
})