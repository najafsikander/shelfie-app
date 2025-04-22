import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

//Themed Components
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedButton from '../components/ThemedButton';

const Register = () => {
  const handleSubmit = () => {
    console.log("Register Pressed");
  }
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Register To Your Account</ThemedText>
        <ThemedButton onPress={handleSubmit}>
          <Text style={{color:'#f2f2f2'}}>Register</Text>
        </ThemedButton>
        <Spacer height={100}/>
        <Link href="/login">
        <ThemedText style={{textAlign: 'center'}}>Login</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontWeight: "bold",
        fontSize: 18,
      }
})