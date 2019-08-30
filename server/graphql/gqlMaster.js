const graphqlHTTP = require('express-graphql');
const graphQlSchema = require('./schemas/user');
// import graphQlResolvers from './resolvers/index';

const graphqlPath = '/graphql';

const graphql = graphqlHTTP({
  schema: graphQlSchema,
  // rootValue: graphQlResolvers,
  graphiql: true
});

module.exports = { graphql, graphqlPath };
