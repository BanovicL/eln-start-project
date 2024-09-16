import { Book, BookInput } from "../types/book";

export class BookService {

    books: Book[] = [
        {
            id: "1",
            title: "The Lord of the Rings",
            genre: "Epic Fantasy",
            pages: 1500,
            description: "Battle for the rings",
            author: "1"
        },
        {
            id: "2",
            title: "Silmarilion",
            genre: "Epic Fantasy",
            pages: 2500,
            description: "History of Arda",
            author: "1"
        },
        {
            id: "3",
            title: "Game of Thrones",
            genre: "Epic Fantasy",
            pages: 4000,
            description: "Battle for iron throne",
            author: "2"
        },
        {
            id: "4",
            title: "Dance of dragons",
            genre: "Epic Fantasy",
            pages: 1500,
            description: "Battle between dragon houses",
            author: "2"
        },
    ]

    async getBooks(): Promise<Book[]>{
        return this.books;
    }

    async getBook(id: string): Promise<Book | undefined> {
        return this.books.find(book => book.id === id);
    }

    async getAuthorBooks(authorBooks: string[]): Promise<Book[] | undefined> {
        return this.books.filter(book => authorBooks.includes(book.id));
    }

    async createBook(book: BookInput): Promise<Book> {
        this.books.push(book);
        return book;
    }

}