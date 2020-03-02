const Requests = require('../models/request-model');

module.exports = {
  validateParentId,
  validateRequestId,
  validateRequestPost
}

function validateParentId() {
  return (req, res, next) => {
    Requests.findParent(req.params.id)
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

function validateRequestId() {
  return (req, res, next) => {
    Requests.findById(req.params.id)
      .then(request => {
        if (request) {
          req.request = request;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Request Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the request. Please try again later."
        })
      })
  }
}

// OPTIONAL
// Stroller Status
function validateRequestPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your request."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your request."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your request."
      })
    } else if (!req.body.request) {
      return res.status(400).json({
        message: "Please provide a request for your request."
      })
    } else if (!req.body.child_count) {
      return res.status(400).json({
        message: "Please provide a child count for your request."
      })
    } else if (!req.body.location) {
      return res.status(400).json({
        message: "Please provide a location for your request."
      })
    } else if (!req.body.time) {
      return res.status(400).json({
        message: "Please provide a time for your request."
      })
    } else if (!req.body.parent_id) {
      return res.status(400).json({
        message: "Please provide a parent id for your request."
      })
    } else if (!req.body.ride) {
      return res.status(400).json({
        message: "Please provide a designated ride for your request."
      })
    } else {
      next();
    }
  }
}