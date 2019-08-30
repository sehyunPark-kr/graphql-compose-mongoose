const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const { schemaComposer } = require('graphql-compose');

const SchemaClass = mongoose.Schema;
const EventSchema = new SchemaClass({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
    type: SchemaClass.Types.ObjectId,
    ref: 'User'
  }
});
const Event = mongoose.model('Event', EventSchema);

const customizationOptions = {};
const EventTC = composeWithMongoose(Event, customizationOptions);

schemaComposer.Query.addFields({
  eventById: EventTC.getResolver('findById'),
  eventOne: EventTC.getResolver('findOne'),
  eventMany: EventTC.getResolver('findMany'),
  eventTotal: EventTC.getResolver('count')
});

schemaComposer.Mutation.addFields({
  eventCreate: EventTC.getResolver('createOne'),
  eventUpdateOne: EventTC.getResolver('updateOne'),
  eventRemoveById: EventTC.getResolver('removeById')
});

module.exports = { Event, EventTC };
