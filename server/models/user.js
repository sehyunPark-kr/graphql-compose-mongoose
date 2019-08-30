const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

////-----------------------------------------------------------------

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
  createdEvents: [
    {
      type: SchemaClass.Types.ObjectId,
      ref: 'Event'
    }
  ]
});
const User = mongoose.model('User', UserSchema);

const customizationOptions = {};
const UserTC = composeWithMongoose(User, customizationOptions);

////-----------------------------------------------------------------

module.exports = { User, UserTC };
