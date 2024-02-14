import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
    issueById(id:Int!):Issue
    allIssueByUser(id:Int!):[Issue]
    issuesByOrder(order:String!):[Issue]
  }
`;

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    issues: async () => await prisma.issue.findMany(),
    issueById: async (_parent, args) => {
      return await prisma.issue.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    allIssueByUser: async (_parent, args) => {
      return await prisma.issue.findFirst({
        where: {
          id: args.id,
        },
        select: {
          email,
          title,
          description,
          link,
          id,
          order,
        },
      });
    },
    issuesByOrder: async (_parent, args) => {
      return await prisma.issue.findUnique({
        where: {
          order: args.order,
        },
        select: {
          order,
          title,
          description,
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
