const offerRouter = require('express').Router();
const Offers = require('../models/offer-model');

const restricted = require('../middleware/restricted');
const {
  validateContractorId,
  validateOfferId,
  validateOfferPost,
} = require('../middleware/verify-offers');

// GET - /api/offers/contractor/:id
// Get all contractor's offers
offerRouter.get('/contractor/:id', validateContractorId(), (req, res) => {
  Offers.findContractor(req.params.id)
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
offerRouter.post('/', validateOfferPost(), (req, res) => {
  Offers.add(req.body)
    .then(offer => {
      res.status(201).json(offer)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while trying to add a new offer. Please try again later."
      })
    })
})

// PUT - /api/offers/:id
offerRouter.put('/:id', validateOfferId(), validateOfferPost(), (req, res) => {
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
offerRouter.delete('/:id', validateOfferId(), (req, res) => {
  Offers.remove(req.params.id)
    .then(() => {
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