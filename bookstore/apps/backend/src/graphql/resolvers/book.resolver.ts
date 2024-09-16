import { AuthorService } from "../../services/author.service";
import { BookService } from "../../services/book.service";

const bookService = new BookService();
const authorService = new AuthorService();

export const bookResolver = {
    Query: {
        books: async () => {
            const books = await bookService.getBooks();
            return books.map((book) => ({
                ...book,
                author: authorService.getAuthor(book.author)
            }))
        },
        // @ts-ignore
        book: async (_, args) => {
            const book = await bookService.getBook(args.id);
            return {
                ...book,
                author: await authorService.getAuthor(book?.author!)
            }
        }
    },
    Mutation: {
        createBook: async (_: any, args: Record<string, any>) => {
            const newBook = await bookService.createBook(args.book)
            return {
                ...newBook,
                author: authorService.getAuthor(newBook.author)
            };
        }
    }
}