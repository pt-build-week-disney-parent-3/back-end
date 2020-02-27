const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

const Auth = require('../models/auth-model');
const restricted = require('../middleware/restricted');

// Token Generator
function generateToken(user) {
  return jwt.sign({
    userId: user.user_id,
  }, secrets.jwtSecret, {
    expiresIn: '1h',
  })
}

// GET - /api/auth/users
// TESTING PURPOSES ONLY
// NOT USED IN PRODUCTION
authRouter.get('/users', restricted(), (req, res) => {
  Auth.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        message: "Cannot retrieve Users. Please try again later."
      })
    })
}) 

// POST - /api/auth/register
authRouter.post('/register', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);

  const user = {
    username: req.body.username,
    password: hash,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    dob: req.body.dob,
    phone_number: req.body.phone_number,
    cpr_cert: req.body.cpr_cert,
    type: req.body.type
  };

  Auth.add(user)
    .then(saved => {
      const token = generateToken(saved);

      res.status(201).json({
        message: `Welcome ${saved.first_name}!`,
        authToken: token  // remove before hosting
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error during registration. Please try again later."
      })
    })
})

// POST - /api/auth/login
authRouter.post('/login', (req, res) => {
  let { username, email, password } = req.body; // both username and email for login

  Auth.findBy({ username, email }) // both username and email for login
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.first_name}!`,
          authToken: token, // remove before hosting
        })
      } else {
        res.status(400).json({
          message: "You are not authorized. Please try to login again."
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error during login. Please try again later."
      })
    })
})

module.exports = authRouter;