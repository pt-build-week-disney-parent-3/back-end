const offerCommentRouter = require('express').Router();
const OfferComments = require('../models/offer-comment-model');

const restricted = require('../middleware/restricted');
const {
  validateOfferId,
  validateOfferCommentPost,
} = require('../middleware/verification');

// GET - /api/offercomments/offer/:id 
// Get all offer comments
offerCommentRouter.get('/offer/:id', restricted(), validateOfferId(), (req, res) => {
  OfferComments.find()
    .then(offerComments => {
      res.status(200).json(offerComments)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while retreiving the offer's comments. Please try again later."
      })
    })
})

// POST - /api/offercomments
offerCommentRouter.post('/', restricted(), validateOfferCommentPost(), (req, res) => {
  OfferComments.add(req.body)
    .then(offerComment => {
      res.status(201).json(offerComment)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while adding your offer comment. Please try again later."
      })
    })
})

// PUT - /api/offercomments/:id
offerCommentRouter.put('/:id', restricted(), validateOfferCommentId(), validateOfferCommentPost(), (req, res) => {
  const changes = req.body;

  OfferComments.update(req.params.id, changes)
    .then(offerComment => {
      res.status(201).json(offerComment)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while updating your offer comment. Please try again later."
      })
    })
})

// DELETE - /api/offercomments/:id
offerCommentRouter.delete('/:id', restricted(), validateOfferCommentId(), (req, res) => {
  OfferComments.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Your offer comment was removed from the Database."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to remove your offer comment. Please try again later."
      })
    })
})

module.exports = offerCommentRouter;