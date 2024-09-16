export const types = `
type Author {
        id: String!
        name: String!
        age: Int!
        books: [Book!]!
    }
type Query {
    author(id: String!): Author
    authors: [Author!]!
}

input AuthorInput {
    id: String!
    name: String!
    age: Int!
}

type Mutation {
    createAuthor(author: AuthorInput!): Author
}
`