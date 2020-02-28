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

// GET - /api/auth/parents
// TESTING PURPOSES ONLY
// NOT USED IN PRODUCTION
authRouter.get('/parents', restricted(), (req, res) => {
  Auth.findParents()
    .then(parents => {
      res.status(200).json(parents);
    })
    .catch(err => {
      res.status(500).json({
        message: "Cannot retrieve Parents. Please try again later."
      })
    })
}) 

// GET - /api/auth/contractors
// TESTING PURPOSES ONLY
// NOT USED IN PRODUCTION
authRouter.get('/contractors', restricted(), (req, res) => {
  Auth.findContractors()
    .then(contractors => {
      res.status(200).json(contractors);
    })
    .catch(err => {
      res.status(500).json({
        message: "Cannot retrieve Contractors. Please try again later."
      })
    })
})

// POST - /api/auth/register/parent
authRouter.post('/register/parent', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);

  const parent = {
    username: req.body.username,
    password: hash,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    dob: req.body.dob,
    phone_number: req.body.phone_number,
    cpr_cert: req.body.cpr_cert
  }

  Auth.addParent(parent)
    .then(saved => {
      const token = generateToken(saved);

      res.status(201).json({
        message: `Welcome ${saved.first_name}!`,
        authToken: token,
      })
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while trying to register the parent. Please try again later."
      })
    })
})

// POST - /api/auth/register/contractor
authRouter.post('/register/contractor', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 10);

  const contractor = {
    username: req.body.username,
    password: hash,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    dob: req.body.dob,
    phone_number: req.body.phone_number,
    cpr_cert: req.body.cpr_cert,
    price: req.body.price
  }

  Auth.addContractor(contractor)
    .then(saved => {
      const token = generateToken(saved);

      res.status(201).json({
        message: `Welcome ${saved.first_name}!`,
        authToken: token,
      })
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while trying to register the contractor. Please try again later."
      })
    })
})

// POST - /api/auth/login/parent
authRouter.post('/login/parent', (req, res) => {
  let { username, password } = req.body; // both username and email for login

  // FIX THIS PART 
  // It currently needs both username and email to login
  Auth.findByParentFilter({ username }) // both username and email for login
    .first()
    .then(parent => {
      if (parent && bcrypt.compareSync(password, parent.password)) {
        const token = generateToken(parent);

        res.status(200).json({
          message: `Welcome ${parent.first_name}!`,
          authToken: token, // remove before hosting
        })
      } else {
        res.status(400).json({
          message: "You are not authorized. Please try to login again."
        })
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error during login. Please try again later."
      })
    })
})

// POST - /api/auth/login/contractor
authRouter.post('/login/contractor', (req, res) => {
  let { username, password } = req.body; // both username and email for login

  // FIX THIS PART 
  // It currently needs both username and email to login
  Auth.findByConstractorFilter({ username }) // both username and email for login
    .first()
    .then(contractor => {
      if (contractor && bcrypt.compareSync(password, contractor.password)) {
        const token = generateToken(contractor);

        res.status(200).json({
          message: `Welcome ${contractor.first_name}!`,
          authToken: token, // remove before hosting
        })
      } else {
        res.status(400).json({
          message: "You are not authorized. Please try to login again."
        })
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error during login. Please try again later."
      })
    })
})

module.exports = authRouter;