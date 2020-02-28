const Parents = require('../models/parent-model');

module.exports = {
  validateParentId, 
  validateParentPost
}

function validateParentId() {
  return (req, res, next) => {
    Parents.findById(req.params.id)
      .then(parent => {
        if (parent) {
          req.parent = parent;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Parent Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the parent. Please try again later."
        })
      })
  }
}

function validateParentPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for the parent."
      })
    } else if (!req.body.password) {
      return res.status(400).json({
        message: "Please provide a password for the parent."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for the parent."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for the parent."
      })
    } else if (!req.body.email) {
      return res.status(400).json({
        message: "Please provide an email for the parent."
      })
    } else if (!req.body.dob) {
      return res.status(400).json({
        message: "Please provide a date of birth for the parent."
      })
    } else if (!req.body.phone_number) {
      return res.status(400).json({
        message: "Please provide a phone number for the parent."
      })
    } else if (!req.body.cpr_cert) {
      return res.status(400).json({
        message: "Please provide a CPR Certification status for the parent."
      })
    } else {
      next();
    }
  }
}