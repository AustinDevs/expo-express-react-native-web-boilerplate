const express = require('express');
const router = express.Router();
const { User } = require('../models');
const passport = require('../config/authentication');

router.get('/', passport.authenticate('facebook-token'),
  (req, res) => User.all()
    .then(users => res.json(users))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    })
);

router.get('/current',
  passport.authenticate('facebook-token'),
  (req, res) => res.json(req.user || {})
);

router.get(
  '/:id',
  passport.authenticate('facebook-token'),
  (req, res) => User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    })
);

router.patch(
  '/current',
  passport.authenticate('facebook-token'),
  (req, res) => User.findByPk(req.user.id)
    .then(user => {
      user.set({ ...user, ...req.body });
      return user.save();
    })
    .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    })
);

module.exports = router;
