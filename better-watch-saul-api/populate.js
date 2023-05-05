require('dotenv').config()

const connectDB = require('./connect');
const Episode = require('./models/episode');

const {episodes} = require('./data');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Episode.deleteMany();
        await Episode.create(episodes);
        console.log('Success!!!!!!');
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

start();
