// const { GraphQLObjectType, GraphQLList } = require('graphql/type');
const { schemaComposer } = require('graphql-compose');

const { composeWithMongoose } = require('graphql-compose-mongoose');
const UserModel = require('../../models/user');

const customizationOptions = {};
const UserTC = composeWithMongoose(UserModel, customizationOptions);

////----------------------------------

// console.log(UserTC.getType());

// schemaComposer.Query.addFields(
//   UserTC.addFields({
//     Users: {
//       type: UserTC.getType(),
//       resolve() {
//         return UserModel.find({});
//       }
//     }
//   }),
// );

////---------------------------------------

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById'),
  //   userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'), // .debug(), // debug info to console for this resolver
  userTotal: UserTC.getResolver('count')
  //   userConnection: UserTC.getResolver('connection'),
  //   userPagination: UserTC.getResolver('pagination')
});

schemaComposer.Mutation.addFields({
  userCreate: UserTC.getResolver('createOne'),
  //   userCreateMany: UserTC.getResolver('createMany'),
  //   userUpdateById: UserTC.getResolver('updateById'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  //   userUpdateMany: UserTC.getResolver('updateMany'),
  userRemoveById: UserTC.getResolver('removeById')
  //   userRemoveOne: UserTC.getResolver('removeOne'),
  //   userRemoveMany: UserTC.getResolver('removeMany')
});

const graphqlSchema = schemaComposer.buildSchema();
module.exports = graphqlSchema;
