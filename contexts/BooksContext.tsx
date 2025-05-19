import { createContext, useState, ReactNode, useEffect } from "react";
import { databases, client } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

interface BooksContextType {
  books: any[];
  fetchBooks: () => Promise<void>;
  fetchBookById: () => Promise<void>;
  createBook: (data: any) => Promise<void>;
  deleteBook: (id: any) => Promise<void>;
}

const DATABASE_ID = process.env.EXPO_PUBLIC_DATABASE_KEY;
const COLLECTION_ID = process.env.EXPO_PUBLIC_COLLECTION_KEY;

export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<any[]>([]);
  const { user } = useUser();

  const fetchBooks = async () => {
    try {
      const response = await databases.listDocuments(DATABASE_ID!,COLLECTION_ID!,[Query.equal('userId',user.$id)]);
      console.log('Books: ', response.documents);
      setBooks(response.documents);
    } catch (err) {
      console.error("Error caught in fetchBooks inside books context: ", err);
    }
  };

  const fetchBookById = async () => {
    try {
    } catch (err) {
      console.error(
        "Error caught in fetch book by id inside books context: ",
        err
      );
    }
  };

  const createBook = async (data: any) => {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID!,
        COLLECTION_ID!,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (err) {
      console.error("Error caught while creating book in books context: ", err);
    }
  };

  const deleteBook = async (id: string) => {
    try {
    } catch (err) {
      console.error(
        "Error caught while deleting book inside books context: ",
        err
      );
    }
  };

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

    if(!user) return setBooks([]);
    fetchBooks();
    unsubscribe = client.subscribe(channel, (response) => {
      const {payload, events} = response;
      if(events[0].includes('create')) setBooks((prev) => [...prev,payload]);
    });

    return () => {
      if(unsubscribe) unsubscribe();
    }
  },[user])

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
