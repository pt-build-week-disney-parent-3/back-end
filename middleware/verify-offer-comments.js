const OfferComments = require('../models/offer-comment-model');

module.exports = {
  validateOfferId,
  validateOfferCommentId,
  validateOfferCommentPost
}

function validateOfferId() {
  return (req, res, next) => {
    OfferComments.findOffer(req.params.id)
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

function validateOfferCommentId() {
  return (req, res, next) => {
    OfferComments.findById(req.params.id)
      .then(offerComment => {
        if (offerComment) {
          req.offerComment = offerComment;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Offer Comment Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the offer comment. Please try again later."
        })
      })
  }
}

function validateOfferCommentPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your offer comment."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your offer comment."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your offer comment."
      })
    } else if (!req.body.offer_comment) {
      return res.status(400).json({
        message: "Please provide an offer comment for your offer comment."
      })
    } else if (!req.body.offer_id) {
      return res.status(400).json({
        message: "Please provide an offer id for your offer comment."
      })
    } else if (!req.body.parent_id) {
      return res.status(400).json({
        message: "Please provide a parent id for your offer comment."
      })
    } else {
      next();
    }
  }
}