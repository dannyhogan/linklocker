const User = require('../models/User');

module.exports = (req, res, next) => {
  const token = req.cookies.session;

  if(token) {
    User
      .findByToken(token)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(next);
  } else {
    const err = new Error('Invalid token!');
    err.status = 401;
    next(err);
  }
};
