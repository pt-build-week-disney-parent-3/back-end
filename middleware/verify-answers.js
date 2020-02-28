const Answers = require('../models/answer-model');

module.exports = {
  validateQuestionId,
  validateAnswerId,
  validateAnswerPost
}

function validateQuestionId() {
  return (req, res, next) => {
    Answers.findQuestion(req.params.id)
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
          message: "There was an error while trying to find your question. Please try again later."
        })
      })
  }
}

function validateAnswerId() {
  return (req, res, next) => {
    Answers.findById(req.params.id)
      .then(answer => {
        if (answer) {
          req.answer = answer;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Answer Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find your answer. Please try again later."
        })
      })
  }
}

function validateAnswerPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your answer to be posted."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your answer to be posted."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your answer to be posted."
      })
    } else if (!req.body.answer) {
      return res.status(400).json({
        message: "Please provide a answer for your answer to be posted."
      })
    } else if (!req.body.question_id) {
      return res.status(400).json({
        message: "Please provide a question id for your answer to be posted."
      })
    } else if (!req.body.contractor_id) {
      return res.status(400).json({
        message: "Please provide a contractor id for your answer to be posted."
      })
    } else {
      next();
    }
  }
}