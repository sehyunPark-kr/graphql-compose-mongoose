const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema
} = require('graphql/type');

const Event = require('../../models/event');
const User = require('../../models/user');

const EventType = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLFloat },
    date: { type: GraphQLString },
    creator: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createdEvents: { type: new GraphQLList(EventType) }
  })
});

// const EventInputType = new GraphQLObjectType({
//   name: 'EventInput',
//   fields: () => ({
//     title: { type: GraphQLString },
//     description: { type: GraphQLString },
//     price: { type: GraphQLFloat },
//     date: { type: GraphQLString }
//   })
// });

// const UserInputType = new GraphQLObjectType({
//   name: 'EventInput',
//   fields: () => ({
//     email: { type: GraphQLString },
//     password: { type: GraphQLString }
//   })
// });

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Events: {
      type: new GraphQLList(EventType),
      resolve() {
        return Event.find({});
      }
    },
    Users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    Event: {
      type: EventType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Event.findOne({ title: { $eq: args.title } });
      }
    },
    User: {
      type: UserType,
      args: {
        email: { type: GraphQLString }
      },
      resolve(parent, args) {
        return User.findOne({ email: { $eq: args.email } });
      }
    }
  }
});

// const RootMutation = new GraphQLObjectType({
//   name: 'RootMutationType',
//   fields: {
//     CreateEvent: {
//       type: new GraphQLList(EventType),
//       resolve() {
//         return Event.find({});
//       }
//     },
//     CreateUser: {
//       type: new GraphQLList(UserType),
//       resolve() {
//         return User.find({});
//       }
//     }
//   }
// });

const Schema = new GraphQLSchema({
  query: RootQuery
  // mutation: RootMutation
});

module.exports = Schema;
