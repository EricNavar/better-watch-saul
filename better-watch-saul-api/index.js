const serverless = require("serverless-http");
const express = require("express");
const app = express();
const tracks = require('./routes');

app.use('/api/v1/tracks', tracks);

module.exports.handler = serverless(app);
