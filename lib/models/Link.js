const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
  },
  isLocked: {
    type: Boolean,
    required: true
  },
  clickCount: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true,
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash;
    }
  }
});

schema.virtual('password').set(function(password) {
  if(password.length >= 1) {
    this.passwordHash = bcrypt.hashSync(password, 14);
  }
});


schema.statics.authorize = async function(id, password) {
  const link = await this.findById(id);

  const validPassword = await bcrypt.compare(password, link.passwordHash);

  if(!validPassword) {
    const err = new Error('Invalid Link password, please try again.');
    err.status = 401;
    throw err;
  }

  return link;
};


module.exports = mongoose.model('Link', schema);
