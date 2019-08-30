const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

////-----------------------------------------------------------------

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

////-----------------------------------------------------------------

module.exports = { Event, EventTC };
