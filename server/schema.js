// SINGLE SCHEMA ON SERVER
// import { schemaComposer  } from 'graphql-compose';

// MULTI SCHEMA MODE IN ONE SERVER
// import { schemaComposer  } from 'graphql-compose';
// const schemaComposer  = new schemaComposer ();

// eslint-disable-next-line no-unused-vars
const graphqlHTTP = require('express-graphql');
const { schemaComposer } = require('graphql-compose');
const { UserTC } = require('./models/user');
const { EventTC } = require('./models/event');

//* STEP 3: Add needed CRUD User operations to the GraphQL Schema
schemaComposer.Query.addFields({
  eventById: EventTC.getResolver('findById'),
  eventOne: EventTC.getResolver('findOne'),
  eventMany: EventTC.getResolver('findMany'),
  eventTotal: EventTC.getResolver('count'),

  userById: UserTC.getResolver('findById'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userTotal: UserTC.getResolver('count')
});

schemaComposer.Mutation.addFields({
  userCreate: UserTC.getResolver('createOne'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  userRemoveById: UserTC.getResolver('removeById'),

  eventCreate: EventTC.getResolver('createOne'),
  eventUpdateOne: EventTC.getResolver('updateOne'),
  eventRemoveById: EventTC.getResolver('removeById')
});

const graphql = graphqlHTTP({
  schema: schemaComposer.buildSchema(),
  graphiql: true
});

module.exports = graphql;
