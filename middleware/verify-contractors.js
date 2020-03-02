const Contractors = require('../models/contractor-model');

module.exports = {
  validateContractorId,
  validateContractorPost
}

function validateContractorId() {
  return (req, res, next) => {
    Contractors.findById(req.params.id)
      .then(contractor => {
        if (contractor) {
          req.contractor = contractor;
          next();
        } else {
          res.status(400).json({
            message: "Invalid Contractor Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to find the contractor. Please try again later."
        })
      })
  }
}

function validateContractorPost() {
  return (req, res, next) => {
    if (!req.body.username) {
      return res.status(400).json({
        message: "Please provide a username for your contractor."
      })
    } else if (!req.body.password) {
      return res.status(400).json({
        message: "Please provide a password for your contractor."
      })
    } else if (!req.body.first_name) {
      return res.status(400).json({
        message: "Please provide a first name for your contractor."
      })
    } else if (!req.body.last_name) {
      return res.status(400).json({
        message: "Please provide a last name for your contractor."
      })
    } else if (!req.body.email) {
      return res.status(400).json({
        message: "Please provide an email for your contractor."
      })
    } else if (!req.body.dob) {
      return res.status(400).json({
        message: "Please provide a date of birth for your contractor."
      })
    } else if (!req.body.phone_number) {
      return res.status(400).json({
        message: "Please provide a phone number for your contractor."
      })
    } else if (!req.body.cpr_cert) {
      return res.status(400).json({
        message: "Please provide a CPR Certification status for your contractor."
      })
    } else if (!req.body.price) {
      return res.status(400).json({
        message: "Please provide a price for your contractor."
      })
    } else {
      next();
    }
  }
}