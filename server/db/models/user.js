const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const { schemaComposer } = require('graphql-compose');
const { EventTC } = require('./event');

const SchemaClass = mongoose.Schema;
const UserSchema = new SchemaClass({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEventIds: [
    {
      type: SchemaClass.Types.ObjectId,
      ref: 'Event'
    }
  ]
});
const User = mongoose.model('User', UserSchema);

const customizationOptions = {};
const UserTC = composeWithMongoose(User, customizationOptions);

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userTotal: UserTC.getResolver('count')
});
schemaComposer.Mutation.addFields({
  userCreate: UserTC.getResolver('createOne'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  userRemoveById: UserTC.getResolver('removeById')
});

UserTC.addRelation('createdEvents', {
  resolver: () => EventTC.getResolver('findByIds'),
  prepareArgs: {
    _ids: (source) => source.createdEventIds
  },
  projection: { createdEventIds: 1 } // point fields in source object, which should be fetched from DB
});

module.exports = { User, UserTC };
