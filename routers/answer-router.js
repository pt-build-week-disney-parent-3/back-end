const answerRouter = require('express').Router();
const Answers = require('../models/answer-model');

// Removed Restricted Middleware per request of React Team
// const restricted = require('../middleware/restricted');

const {
  validateQuestionId,
  validateAnswerId,
  validateAnswerPost
} = require('../middleware/verify-answers');

// GET - /api/answers/question/:id
// get all answers to a question
answerRouter.get('/question/:id', validateQuestionId(), (req, res) => {
  Answers.findQuestion(req.params.id)
    .then(answers => {
      res.status(200).json(answers);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the answers to the requested question. Please try again later."
      })
    })
})

// GET - /api/answers/:id
answerRouter.get('/:id', validateAnswerId(), (req, res) => {
  Answers.findById(req.params.id)
    .then(answer => {
      res.status(200).json(answer)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the requested answer. Please try again later."
      })
    })
})

// POST - /api/answers
answerRouter.post('/', validateAnswerPost(), (req, res) => {
  Answers.add(req.body)
    .then(answer => {
      res.status(201).json(answer)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to add the answer. Please try again later."
      })
    })
})

// PUT - /api/answers/:id
answerRouter.put('/:id', validateAnswerId(), validateAnswerPost(), (req, res) => {
  const changes = req.body;

  Answers.update(req.params.id, changes)
    .then(answer => {
      res.status(201).json(answer)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to update the requested answer. Please try again later."
      })
    })
})

// DELETE - /api/answers/:id
answerRouter.delete('/:id', validateAnswerId(), (req, res) => {
  Answers.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The answer was removed from the Database."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to remove the answer. Please try again later."
      })
    })
})

module.exports = answerRouter;