import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo_light.png";
const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.img}/>
      <Text style={[styles.title, {color: 'purple'}]}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img:{
    marginVertical: 20
  }
});
