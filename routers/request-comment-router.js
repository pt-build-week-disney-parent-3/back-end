const requestCommentRouter = require('express').Router();
const RequestComments = require('../models/request-comment-model');

const restricted = require('../middleware/restricted');
const {} = require('../middleware/verification');

// GET - /api/reqcomments/request/:id
// get all request comments for a request
requestCommentRouter.get('/request/:id', restricted(), validateRequestId(), (req, res) => {
  RequestComments.findRequest(req.params.id)
    .then(reqcomments => {
      res.status(200).json(reqcomments)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the request comments for the chosen request. Please try again later."
      })
    })
})

// POST - /api/reqcomments
requestCommentRouter.post('/', restricted(), validateRequestCommentPost(), (req, res) => {
  RequestComments.add(req.body)
    .then(reqcomment => {
      res.status(201).json(reqcomment)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to add the request comment. Please try again later."
      })
    })
})

// PUT - /api/reqcomments/:id
requestCommentRouter.put('/:id', restricted(), validateRequestCommentId(), validateRequestCommentPost(), (req, res) => {
  const changes = req.body;

  RequestComments.update(req.params.id, changes)
    .then(requestComment => {
      res.status(201).json(requestComment)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to update the request comment. Please try again later."
      })
    })
})

// DELETE - /api/reqcomments/:id
requestCommentRouter.delete('/:id', restricted(), validateRequestCommentId(), (req, res) => {
  RequestComments.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Request Comment was removed from the Database."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to remove the request comment. Please try again later."
      })
    })
})
  
module.exports = requestCommentRouter;