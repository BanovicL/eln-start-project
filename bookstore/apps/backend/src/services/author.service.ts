import { Author, AuthorInput } from "../types/author";

export class AuthorService {

    authors: Author[] = [
        {
            id: "1",
            name: "John Ronald Reuel Tolkien",
            age: 70,
            books: ["1", "2"]
        },
        {
            id: "2",
            name: "George R. R. Martin",
            age: 70,
            books: ["3", "4"]
        },
    ]

    async getAuthors(): Promise<Author[]>{
        return this.authors;
    }

    async getAuthor(id: string): Promise<Author | undefined> {
        return this.authors.find(author => author.id === id);
    }

    async createAuthor({ id, name, age }: AuthorInput): Promise<Author> {
        const newAuthor: Author = {
            id,
            name,
            age,
            books: []
        };
        this.authors.push(newAuthor);
        return newAuthor
    }

}