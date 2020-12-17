const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');

const profile = require('./routes/sampleRoute');

const app = express();
app.use(bodyparser.json());
app.use(morgan('combined'));
app.use('/file', profile);

const server = app.listen({
  port: process.env.PORT,
  host: process.env.HOST,
});
server.on('listening', () => {
  console.log('Listening', process.env.PORT);
});
server.on('error', () => {
  console.log('error', process.env.PORT);
});
