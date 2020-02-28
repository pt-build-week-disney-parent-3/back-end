const Offers = require('../models/offer-model');

module.exports = {
  validateContractorId,
  validateOfferId,
  validateOfferPost
}

function validateContractorId() {
  return (req, res, next) => {
    Offers.findContractor(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(400).json({
            message: "Invalid User Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the user. Please try again later."
        })
      })
  }
}

function validateOfferId() {
  return (req, res, next) => {
    Offers.findById(req.params.id)
      .then(offer => {
        if (offer) {
          req.offer = offer;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Offer Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the offer. Please try again later."
        })
      })
  }
}

function validateOfferPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your offer."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your offer."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your offer."
      })
    } else if (!req.body.offer) {
      return res.status(400).json({
        message: "Please provide an offer for your offer."
      })
    } else if (!req.body.max_child_count) {
      return res.status(400).json({
        message: "Please provide a maximum child count for your offer."
      })
    } else if (!req.body.location) {
      return res.status(400).json({
        message: "Please provide a location for your offer."
      })
    } else if (!req.body.time) {
      return res.status(400).json({
        message: "Please provide a time for your offer."
      })
    } else if (!req.body.contractor_id) {
      return res.status(400).json({
        message: "Please provide a contractor id for your offer."
      })
    } else {
      next();
    }
  }
}