const RequestComments = require('../models/request-comment-model');

module.exports = {
  validateRequestId,
  validateRequestCommentId,
  validateRequestCommentPost
}

function validateRequestId() {
  return (req, res, next) => {
    RequestComments.findRequest(req.params.id)
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

function validateRequestCommentId() {
  return (req, res, next) => {
    RequestComments.findById(req.params.id)
      .then(requestComment => {
        if (requestComment) {
          req.requestComment = requestComment;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Request Comment Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the request comment. Please try again later."
        })
      })
  }
}

function validateRequestCommentPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your request comment."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your request comment."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your request comment."
      })
    } else if (!req.body.request_comment) {
      return res.status(400).json({
        message: "Please provide a request comment for your request comment."
      })
    } else if (!req.body.request_id) {
      return res.status(400).json({
        message: "Please provide a request id for your request comment."
      })
    } else if (!req.body.contractor_id) {
      return res.status(400).json({
        message: "Please provide a user id for your request comment."
      })
    } else {
      next();
    }
  }
}