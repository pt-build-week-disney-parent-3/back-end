require('dotenv').config();

const server = require('./api/server');

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 5000;

server.listen(port, host, () => {
  console.log(`API is running at http://${host}:${port}...`);
});