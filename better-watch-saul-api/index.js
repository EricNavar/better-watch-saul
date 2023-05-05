const serverless = require("serverless-http");
const express = require("express");
const tracks = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api/v1/tracks', tracks);

module.exports.handler = serverless(app);
