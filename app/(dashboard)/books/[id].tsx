import { StyleSheet, Text, View } from "react-native";

import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedCard from "../../components/ThemedCard";
import { useLocalSearchParams } from "expo-router";
import { useEffect,useState } from "react";
import { useBooks } from "../../../hooks/useBooks";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState<any | null>(null);
  const { fetchBookById } = useBooks();

  useEffect(() => {
    loadBook();
  },[id]);

  const loadBook = async () => {
    const bookData = await fetchBookById(id.toString());
    setBook(bookData);
  }

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
