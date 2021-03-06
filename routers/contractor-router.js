const contractorRouter = require('express').Router();
const Contractors = require('../models/contractor-model');

// Removed Restricted Middleware per request of React Team
// const restricted = require('../middleware/restricted');

const {
  validateContractorId,
  validateContractorPost,
} = require('../middleware/verify-contractors');

// GET - /api/contractors
contractorRouter.get('/', (req, res) => {
  Contractors.find()
    .then(contractors => {
      res.status(200).json(contractors);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while retreiving the list of our Contractors. Please try again later."
      })
    })
})

// GET - /api/contractors/:id
contractorRouter.get('/:id', validateContractorId(), (req, res) => {
  Contractors.findById(req.params.id)
    .then(contractor => {
      res.status(200).json(contractor);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while retreiving your requested Contractor. Please try again later."
      })
    })
})

// PUT - /api/contractors/:id
contractorRouter.put('/:id', validateContractorId(), validateContractorPost(), (req, res) => {
  const changes = req.body;

  Contractors.update(req.params.id, changes)
    .then(contractor => {
      res.status(201).json(contractor);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while updating your Contractor Account. Please try again later."
      })
    })
})

module.exports = contractorRouter;