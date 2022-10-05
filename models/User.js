const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: { type:String, unique: true, required: true, trim: true},
      last: String,
      age: Number,
      applications: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Application',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );


  const User = model('user', userSchema);

  module.exports = User;