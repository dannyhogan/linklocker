const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, 'Username is taken.']
  },
  profileViews: {
    type: Number,
    default: 0
  },
  passwordHash: {
    type: String,
    required: true
  },
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash;
    }
  }
});

schema.virtual('password').set(function(password) {
  this.passwordHash = bcrypt.hashSync(password, 14);
});

schema.statics.findByToken = function(token) {
  try {
    const tokenPayload = jwt.verify(token, process.env.APP_SECRET);
    return Promise.resolve(this.hydrate({
      _id: tokenPayload._id,
      username: tokenPayload.username,
      __v: tokenPayload.__v
    }));
  } catch(err) {
    return Promise.reject(err);
  }
};

schema.statics.authorize = async function({ username, password }) {
  const existingUser = await this.findOne({ username });
  if(!existingUser) {
    const err = new Error('Invalid user/Password');
    err.status = 401;
    throw err;
  }

  const validPassword = await bcrypt.compare(password, existingUser.passwordHash);
  if(!validPassword) {
    const err = new Error('Invalid user/Password');
    err.status = 401;
    throw err;
  }

  return existingUser;
};

schema.methods.authToken = function() {
  return jwt.sign(this.toJSON(), process.env.APP_SECRET, {
    expiresIn: '24h'
  });
};

module.exports = mongoose.model('User', schema);