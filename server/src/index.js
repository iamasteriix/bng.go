import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Construct a schema, using GraphQL schema language
const schema = makeExecutableSchema({
  typeDefs: gql`
  type Query {
    hello: String
  }
  `,
  resolvers: {
    Query: { hello: (_, { name }) => `Hello ${name || "World"}`, },
  }
});

// initialize server
const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
  console.log(`server is open at ${url}`)
})