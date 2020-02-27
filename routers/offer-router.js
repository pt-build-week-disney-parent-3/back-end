const offerRouter = require('express').Router();
const Offers = require('../models/offer-model');

const restricted = require('../middleware/restricted');
const {
  validateUserId,
  validateOfferId,
  validateOfferPost,
} = require('../middleware/verification');

// GET - /api/offers/user/:id
// Get all user's offers
offerRouter.get('/user/:id', restricted(), validateUserId(), (req, res) => {
  Offers.find()
    .then(offers => {
      res.status(200).json(offers)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retreive the user's offers. Please try again later."
      })
    })
})

// POST - /api/offers
offerRouter.post('/', restricted(), validateOfferPost(), (req, res) => {
  Offers.add(req.body)
    .then(offer => {
      res.status(201).json(offer)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to add a new offer. Please try again later."
      })
    })
})

// PUT - /api/offers/:id
offerRouter.put('/:id', restricted(), validateOfferId(), validateOfferPost(), (req, res) => {
  const changes = req.body;

  Offers.update(req.params.id, changes)
    .then(offer => {
      res.status(201).json(offer)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to update the offer. Please try again later."
      })
    })
})

// DELETE - /api/offers/:id
offerRouter.delete('/:id', restricted(), validateOfferId(), (req, res) => {
  Offers.remove(() => {
    res.status(200).json({
      message: "The offer was removed from the Database"
    })
  })
  .catch(err => {
    res.status(500).json({
      message: "There was an error trying to remove the offer. Please try again later."
    })
  })
})

module.exports = offerRouter;