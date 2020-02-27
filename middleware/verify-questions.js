const Questions = require('../models/question-model');

module.exports = {
  validateUserId,
  validateQuestionId,
  validateQuestionPost
}

function validateUserId() {
  return (req, res, next) => {
    Questions.findUser(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(400).json({
            message: "Invalid User Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the user. Please try again later."
        })
      })
  }
}

function validateQuestionId() {
  return (req, res, next) => {
    Questions.findById(req.params.id)
      .then(question => {
        if (question) {
          req.question = question;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Question Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the question. Please try again later."
        })
      })
  }
}

function validateQuestionPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your question."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your question."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your question."
      })
    } else if (!req.body.question) {
      return res.status(400).json({
        message: "Please provide a question for your question."
      })
    } else if (!req.body.user_id) {
      return res.status(400).json({
        message: "Please provide a user id for your question."
      })
    } else {
      next();
    }
  }
}