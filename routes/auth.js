const express = require('express');
const router = express.Router();
const passport = require('../config/authentication');

router.get(
  '/facebook',
  passport.authenticate('facebook-token'),
  (req, res) => res.sendStatus(req.user ? 200 : 401)
);

module.exports = router;