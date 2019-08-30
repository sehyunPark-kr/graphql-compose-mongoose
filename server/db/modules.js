const Event = require('./models/event');
const User = require('./models/user');

module.exports = {
  Event,
  User
};

//todo STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
//todo STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
//todo STEP 3: Add needed CRUD User operations to the GraphQL Schema
//* 참고
// schemaComposer.Query.addFields({
//   userById: UserTC.getResolver('findById'),
//   userByIds: UserTC.getResolver('findByIds'),
//   userOne: UserTC.getResolver('findOne'),
//   userMany: UserTC.getResolver('findMany'),
//   userCount: UserTC.getResolver('count'),
//   userConnection: UserTC.getResolver('connection'),
//   userPagination: UserTC.getResolver('pagination'),
// });

// schemaComposer.Mutation.addFields({
//   userCreateOne: UserTC.getResolver('createOne'),
//   userCreateMany: UserTC.getResolver('createMany'),
//   userUpdateById: UserTC.getResolver('updateById'),
//   userUpdateOne: UserTC.getResolver('updateOne'),
//   userUpdateMany: UserTC.getResolver('updateMany'),
//   userRemoveById: UserTC.getResolver('removeById'),
//   userRemoveOne: UserTC.getResolver('removeOne'),
//   userRemoveMany: UserTC.getResolver('removeMany'),
// });
