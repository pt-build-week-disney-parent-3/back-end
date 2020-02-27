// Dependencies 
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers
const authRouter = require('../routers/auth-router');
const contractorRouter = require('../routers/contractor-router');
const offerRouter = require('../routers/offer-router');
const offerCommentRouter = require('../routers/offer-comment-router');
const parentRouter = require('../routers/parent-router');
const childRouter = require('../routers/child-router');
const questionRouter = require('../routers/question-router');
const answerRouter = require('../routers/answer-router');
const requestRouter = require('../routers/request-router');
const requestCommentRouter = require('../routers/request-comment-router');

// Server
const server = express();

// Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
server.use('/api/auth', authRouter);
server.use('/api/contractors', contractorRouter);
server.use('/api/offers', offerRouter);
server.use('/api/offercomments', offerCommentRouter);
server.use('/api/parents', parentRouter);
server.use('/api/children', childRouter);
server.use('/api/questions', questionRouter);
server.use('/api/answers', answerRouter);
server.use('/api/requests', requestRouter);
server.use('/api/reqcomments', requestCommentRouter);

// Root Endpoint
server.get('/', (req, res) => {
  res.send("<h2>Welcome to the Disney Parent 3 API!</h2>")
})

module.exports = server;