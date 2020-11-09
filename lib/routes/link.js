const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Link = require('../models/Link');
const User = require('../models/User');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const owner = req.user._id;
    const { url, title, isLocked, password } = req.body;
    Link
      .create({ owner, url, title, isLocked, password: isLocked && password })
      .then(link => {
        res.send(link);
      })
      .catch(next);
  })

  .post('/:id', (req, res, next) => {
    const { id } = req.params;
    const { password } = req.body;

    if(password) {

      Link
        .authorize(id, password)
        .then(link => {
          res.send(link);
        })
        .catch(next);

    } else {
      
      Link
        .findByIdAndUpdate(id, { $inc: { clickCount: 1 } })
        .then(link => {
          res.send(link);
        })
        .catch(next);
    }

  })

  .get('/:username', async (req, res, next) => {
    const { username } = req.params;

    const profile = await User.findOne({ username });

    if(!profile) {

      return res.status(400).send({
        message: 'Unable to find profile!'
      });

    } else {
      Link
        .find({ owner: profile })
        .select(['-url', '-clickCount', '-owner', '-__v'])
        .then(links => {
          res.send(links);
        })
        .catch(next);
    }

  });
