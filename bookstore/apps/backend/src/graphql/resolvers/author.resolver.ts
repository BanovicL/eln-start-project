import { AuthorService } from "../../services/author.service";
import { BookService } from "../../services/book.service";
import { AuthorInput } from "../../types/author";

const authorService = new AuthorService();
const bookService = new BookService();

export const authorResolver = {
    Query: {
        authors: async () => {
            const authors = await authorService.getAuthors();
            return authors.map(async (author) => ({
                ...author,
                books: await bookService.getAuthorBooks(author.books)
            }));
        },
        // @ts-ignore
        author: async (_, args) => {
            return await authorService.getAuthor(args.id);
        }
    },
    Mutation: {
        // @ts-ignore
        createAuthor: async (_, args: Record<string, any>) => {
            return await authorService.createAuthor(args.author);
        }
    }
}