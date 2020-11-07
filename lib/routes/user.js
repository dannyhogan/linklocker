const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const User = require('../models/User');

const MAX_AGE = 24 * 60 * 60 * 1000;

const setSessionCookie = (res, token) => {
  res.cookie('session', token, {
    maxAge: MAX_AGE,
    sameSite: process.env.NODE_ENV === 'dev' ? false : true,
    secure: process.env.NODE_ENV === 'dev' ? false : true
  });

};

const removeSessionCookie = (res, token) => {
  res.clearCookie('session', token, {
    maxAge: MAX_AGE,
  });
};

module.exports = Router()
  .post('/signup', (req, res, next) => {
    console.log('req.body in signup', req.body);

    User
      .create(req.body)
      .then(user => {
        setSessionCookie(res, user.authToken());
        res.send(user);
      })
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    User
      .authorize(req.body)
      .then(user => {
        setSessionCookie(res, user.authToken());
        res.send(user);
      })
      .catch(next);
  })

  .get('/logout', ensureAuth, (req, res, next) => {
    const token = req.user.authToken();
    removeSessionCookie(res, token);
    res.send(401);
  })

  .get('/verify', ensureAuth, (req, res, next) => {

    res.status(200);
    res.send({ user: req.user });
  });
