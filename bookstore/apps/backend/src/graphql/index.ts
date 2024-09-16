import "graphql-import-node"
import { types as bookTypes } from "./typedefs/book.types";
import { types as authorTypes } from "./typedefs/author.types";
import { bookResolver } from "./resolvers/book.resolver";
import { authorResolver } from "./resolvers/author.resolver";

export const typeDefs = `
    ${bookTypes}
    ${authorTypes}
`

export const resolvers = {
    Query: {
        ...bookResolver.Query,
        ...authorResolver.Query
    },
    Mutation: {
        ...bookResolver.Mutation,
        ...authorResolver.Mutation
    }
}
