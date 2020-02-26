const contractorRouter = require('express').Router();
const Contractors = require('../models/contractor-model');

const restricted = require('../middleware/restricted');
const {
  validateContractorId,
  validateContractorPost,
} = require('../middleware/verification');

// GET - /api/contractors
contractorRouter.get('/', restricted(), (req, res) => {
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
contractorRouter.get('/:id', restricted(), validateContractorId(), (req, res) => {
  Contractors.findBy({ username }) // might need to change if using email for login
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
contractorRouter.put('/:id', restricted(), validateContractorId(), validateContractorPost(), (req, res) => {
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