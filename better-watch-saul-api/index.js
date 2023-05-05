const serverless = require("serverless-http");
const express = require("express");
const tracks = require('./routes');
const cors = require('cors');
const connectDB = require('./connect');
require('dotenv').config();

const connect = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
    } catch (error) {
      console.log(error);
    }
};

const app = express();
connect();

app.use(cors());
app.use('/api/v1/tracks', tracks);

module.exports.handler = serverless(app);
