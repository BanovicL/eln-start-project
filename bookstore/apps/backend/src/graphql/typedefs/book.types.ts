export const types = `
type Book {
        id: String!
        title: String!
        genre: String!
        pages: Int!
        description: String!
        author: Author!
    }
type Query {
    book(id: String!): Book
    books: [Book!]!
}

input BookInput {
    id: String!
    title: String!
    genre: String!
    pages: Int!
    description: String!
    author: String!
}

type Mutation {
    createBook(book: BookInput!): Book
}
`