import express from "express"
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv"
import { typeDefs, resolvers } from "./graphql";

dotenv.config();

const PORT = process.env.PORT || 4001;

const bootstrapServer = async () => {
    const app = express();
    const graphqlServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await graphqlServer.start();

    app.get("/", (req, res) => {
        res.send("Bookstore")
    })

    app.use(express.json());
    app.use("/graphql", expressMiddleware(graphqlServer));

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

bootstrapServer();