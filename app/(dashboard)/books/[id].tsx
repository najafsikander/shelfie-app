import { StyleSheet, Text, View } from "react-native";

import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedCard from "../../components/ThemedCard";
import ThemedLoader from "../../components/ThemedCard"
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect,useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import { Colors } from "../../../constants/Colors";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState<any | null>(null);
  const { fetchBooks, fetchBookById, deleteBook } = useBooks();
  const router = useRouter();

  useEffect(() => {
    loadBook();
    return () => setBook(null)
  },[id]);

  const loadBook = async () => {
    const bookData = await fetchBookById(id.toString());
    setBook(bookData);
  }

  const handleDelete = async () => {
    await deleteBook(id);
    setBook(null)
    fetchBooks();
    router.push("/books");
  }

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
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
      <ThemedButton onPress={handleDelete} styles={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
      </ThemedButton>
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
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
});
