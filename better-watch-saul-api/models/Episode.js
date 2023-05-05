const mongoose = require('mongoose')

const EpisodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  season_number: {
    type: Boolean,
    required: [true, 'must provide season_number'],
  },
  episode_number: {
    type: Boolean,
    required: [true, 'must provide episode_number'],
  },
  episode_number: {
    type: String,
    required: [true, 'must provide description'],
  },
  src: {
    type: String,
    required: [true, 'must provide video src'],
  },
})

module.exports = mongoose.model('Episode', EpisodeSchema)
