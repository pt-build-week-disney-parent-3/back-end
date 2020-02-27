const parentRouter = require('express').Router();
const Parents = require('../models/parent-model');

const restricted = require('../middleware/restricted');
const { validateParentId } = require('../middleware/verification');

// GET - /api/parents
parentRouter.get('/', restricted(), (req, res) => {
  Parents.find()
    .then(parents => {
      res.status(200).json(parents)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the list of parents. Please try again later."
      })
    })
})

// GET - /api/parents/:id
parentRouter.get('/:id', restricted(), validateParentId(), (req, res) => {
  Parents.findById(req.params.id)
    .then(parent => {
      res.status(200).json(parent)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retrieve the requested parent. Please try again later."
      })
    })
})

// PUT - /api/parents/:id
parentRouter.put('/:id', restricted(), validateParentId(), (req, res) => {
  const changes = req.body;
  
  Parents.update(req.params.id, changes)
    .then(parent => {
      res.status(201).json(parent)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error updating the parent. Please try again later."
      })
    })
})

module.exports = parentRouter;