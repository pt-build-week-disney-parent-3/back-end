const questionRouter = require('express').Router();
const Questions = require('../models/question-model');

// Removed Restricted Middleware per request of React Team
// const restricted = require('../middleware/restricted');

const {
  validateParentId,
  validateQuestionId,
  validateQuestionPost,
} = require('../middleware/verify-questions');

// GET - /api/questions
questionRouter.get('/', (req, res) => {
  Questions.find()
    .then(questions => {
      res.status(200).json(questions)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the list of questions. Please try again later."
      })
    })
})

// GET - /api/questions/parent/:id
// Get all questions for a user
questionRouter.get('/parent/:id', validateParentId(), (req, res) => {
  Questions.findParent(req.params.id)
    .then(questions => {
      res.status(200).json(questions)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the list of questions for the requested User. Please try again later."
      })
    })
})

// POST - /api/questions
questionRouter.post('/', validateQuestionPost(), (req, res) => {
  Questions.add(req.body)
    .then(question => {
      res.status(201).json(question)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to add the question. Please try again later."
      })
    })
})

// PUT - /api/questions/:id
questionRouter.put('/:id', validateQuestionId(), validateQuestionPost(), (req, res) => {
  const changes = req.body;

  Questions.update(req.params.id, changes)
    .then(question => {
      res.status(201).json(question)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error updating the question. Please try again later."
      })
    })
})

// DELETE - /api/question/:id
questionRouter.delete('/:id', validateQuestionId(), (req, res) => {
  Questions.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The question has been removed from the Database."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to remove the question. Please try again later."
      })
    })
})

module.exports = questionRouter;