const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
      reactionId: { type:Schema.Types.ObjectId,default: () => new Types.ObjectId() },
      reactionBody: {
          type: String,
          required: true,
          maxlength: 280,
        },
        username: { type:String, required: true },
        createdAt: {
          type: Date,
          default: Date.now,
          // TODO: Add getter method to format current date
        },
      },
      {
        toJSON: {
          getters: true,
        },
        id: false,
      }
)

const thoughtSchema = new Schema(
  {
    thoughtText: { type:String, required:true, minLength:1, maxLength:280 },
    createdAt: { type:Date, default: Date.now, 
    // TODO: getter method to format timestamp on query
    },
    username: { type:String, required:true},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })

// Initialize our User model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
