import { StyleSheet, Text, View } from "react-native";

import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedCard from "../../components/ThemedCard";
import { useLocalSearchParams } from "expo-router";

const BookDetails = () => {

  const {id} = useLocalSearchParams();
  
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText>Book Details - {id}</ThemedText>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
