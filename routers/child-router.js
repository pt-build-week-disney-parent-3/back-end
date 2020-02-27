const childRouter = require('express').Router();
const Children = require('../models/child-model');
const restricted = require('../middleware/restricted');
const {
  validateParentId,
  validateChildPost,
  validateChildId,
} = require('../middleware/verify-children');

// GET - /api/children/parent/:id 
// Get all children for parent
childRouter.get('/parent/:id', restricted(), validateParentId(), (req, res) => {
  Children.findParent(req.params.id)
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while retreiving the parent's children. Please try again later."
      })
    })
})

// POST - /api/children
childRouter.post('/', restricted(), validateChildPost(), (req, res) => {
  Children.add(req.body)
    .then(child => {
      res.status(201).json(child);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while creating a child. Please try again later."
      })
    })
})

// PUT - /api/children/:id
childRouter.put('/:id', restricted(), validateChildId(), validateChildPost(), (req, res) => {
  const changes = req.body;

  Children.update(req.params.id, changes)
    .then(child => {
      res.status(201).json(child)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while updating the child. Please try again later."
      })
    })
})

// DELETE - /api/children/:id
childRouter.delete('/:id', restricted(), validateChildId(), (req, res) => {
  Children.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The child was successfully removed from the Database."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to remove the child from the Database. Please try again later."
      })
    })
})

module.exports = childRouter;