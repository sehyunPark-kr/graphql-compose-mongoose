const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./schemas/user');

const graphqlPath = '/graphql';

const graphql = graphqlHTTP({
  schema: graphqlSchema,
  graphiql: false
});

module.exports = { graphql, graphqlPath };
