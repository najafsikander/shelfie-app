import { useContext } from "react"
import { BooksContext } from "../contexts/BooksContext"

export const useBooks = () => {
    const booksContext = useContext(BooksContext);

    if(!booksContext) throw new Error('useBooks must be provided under BooksProvider');

    return booksContext;
}