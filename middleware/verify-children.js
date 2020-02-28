const Children = require('../models/child-model');

module.exports = {
  validateParentId,
  validateChildPost,
  validateChildId,
}

function validateParentId() {
  return (req, res, next) => {
    Children.findParent(req.params.id)
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

function validateChildId() {
  return (req, res, next) => {
    Children.findById(req.params.id)
      .then(child => {
        if (child) {
          req.child = child;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Child Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the child. Please try again later."
        })
      })
  }
}

// OPTIONAL:
// Allergies, Medical Conditions, Special Instructions
function validateChildPost() {
  return (req, res, next) => {
    if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your child."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your child."
      })
    } else if (!req.body.dob) {
      return res.status(400).json({
        message: "Please provide a date of birth for your child."
      })
    } else if (!req.body.parent_id) {
      return res.status(400).json({
        message: "Please provide a parent id for your child."
      })
    } else {
      next();
    }
  }
}