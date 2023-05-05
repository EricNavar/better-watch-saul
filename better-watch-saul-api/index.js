const serverless = require("serverless-http");
const express = require("express");
const tracks = require('./routes/episodes');
const cors = require('cors');
const connectDB = require('./connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

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
app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports.handler = serverless(app);
