import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

// A schema is a collection of type definitions (hence "typeDefs")
const typeDefs = `#graphql
 # This "Issue" type shape 
 type Issue{
    id: Int!
    email:String!
    title:String!
    description:String!
    link:String!
    order:Order!
 }
 enum Order {
  NORMAL
  MEDIUM
  HIGH
}
type Query {
    issues: [Issue]
  }
`;

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    issues: async () =>
      (await axios.get("http://localhost:3000/api/get-issues")).data,
  },
};

// server
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});
console.log(`🚀  Server ready at: ${url}`);
