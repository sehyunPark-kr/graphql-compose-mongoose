require('./modules');

const graphqlHTTP = require('express-graphql');
const { schemaComposer } = require('graphql-compose');

const graphql = graphqlHTTP({
  schema: schemaComposer.buildSchema(),
  graphiql: true
});

module.exports = graphql;
