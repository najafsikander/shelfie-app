import {createContext, useState, ReactNode} from 'react';

interface BooksContextType {
    books: any[];
    fetchBooks: () => Promise<void>;
    fetchBookById: () => Promise<void>;
    createBook: (data: any) => Promise<void>;
    deleteBook: (id: any) => Promise<void>;
}

const DATABASE_ID = '';
const COLLECTION_ID = '';

export const BooksContext = createContext<BooksContextType | null>(null);

export const BooksProvider = ({children}: {children: ReactNode}) => {

    const [books,setBooks] = useState([]);

    const fetchBooks = async () => {
        try {

        } catch(err) {
            console.error('Error caught in fetchBooks inside books context: ', err);
        }
    }

    const fetchBookById = async () => {
        try {

        } catch (err) {
            console.error('Error caught in fetch book by id inside books context: ', err);
        }
    }

    const createBook = async (data:any) => {
        try {

        } catch (err) {
            console.error('Error caught while creating book in books context: ', err);
        }
    }

    const deleteBook = async (id:string) => {
        try {

        } catch (err) {
            console.error('Error caught while deleting book inside books context: ', err);
        }
    }

    return (<BooksContext.Provider value={{books,fetchBooks, fetchBookById, createBook, deleteBook}}>{children}</BooksContext.Provider>);
}