const requestRouter = require('express').Router();
const Requests = require('../models/request-model');

const restricted = require('../middleware/restricted');
const {
  validateParentId,
  validateRequestId,
  validateRequestPost,
} = require('../middleware/verify-requests');

// GET - /api/requests/parent/:id
// get all the requests from a parent
requestRouter.get('/parent/:id', restricted(), validateParentId(), (req, res) => {
  Requests.findParent(req.params.id)
    .then(requests => {
      res.status(200).json(requests)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the parent's requests. Please try again later."
      })
    })
})

// POST - /api/requests
requestRouter.post('/', restricted(), validateRequestPost(), (req, res) => {
  Requests.add(req.body)
    .then(request => {
      res.status(201).json(request)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while trying to add a request. Please try again later."
      })
    })
})

// PUT - /api/requests/:id
requestRouter.put('/:id', restricted(), validateRequestId(), validateRequestPost(), (req, res) => {
  const changes = req.body;

  Requests.update(req.params.id, changes)
    .then(request => {
      res.status(201).json(request)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to update your request. Please try again later."
      })
    })
})

// DELETE - /api/requests/:id
requestRouter.delete('/:id', restricted(), validateRequestId(), (req, res) => {
  Requests.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The request has been removed from the Database."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error removing the request from the Database. Please try again later."
      })
    })
})

module.exports = requestRouter;