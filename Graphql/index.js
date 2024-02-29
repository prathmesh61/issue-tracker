import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

// ignore prisma
const prisma = new PrismaClient();

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
    issueById(id:Int!):Issue
    issueByUserEmail(email:String!):[Issue]
    issuesByOrder(order:String!):[Issue]
  }
`;

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    issues: async () =>
      (await axios.get("http://localhost:3000/api/get-issues")).data,
    issueById: async (_parent, args) => {
      return await prisma.issue.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    issueByUserEmail: async (_parent, args) => {
      return await prisma.issue.findMany({
        where: {
          email: args.email,
        },
        select: {
          email: true,
          title: true,
          order: true,
        },
      });
    },
    issuesByOrder: async (_parent, args) => {
      return await prisma.issue.findMany({
        where: {
          order: args.order,
        },
        select: {
          email: true,
          title: true,
          link: true,
          id: true,
          order: true,
        },
      });
    },
  },
};

// server
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});
console.log(`🚀  Server ready at: ${url}`);
