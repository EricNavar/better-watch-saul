const Episode = require('../models/episode');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getTracksFromSeason = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const episodes = await Episode.find({ season_number: id })
  res.status(200).json({ episodes })
});

const getTrack = asyncWrapper(async (req, res, next) => {
  const { id: episodeID } = req.params
  const episode = await Episode.findOne({ _id: episodeID })
  if (!episode) {
    return next(createCustomError(`No episode with id : ${episodeID}`, 404))
  }

  res.status(200).json({ episode })
});

module.exports = {
  getTracksFromSeason,
  getTrack,
}


// const updateEpisode = asyncWrapper(async (req, res, next) => {
//   const { id: episodeID } = req.params

//   const episode = await Episode.findOneAndUpdate({ _id: episodeID }, req.body, {
//     new: true,
//     runValidators: true,
//   })

//   if (!episode) {
//     return next(createCustomError(`No episode with id : ${episodeID}`, 404))
//   }

//   res.status(200).json({ episode })
// });

// const deleteEpisode = asyncWrapper(async (req, res, next) => {
//   const { id: episodeID } = req.params
//   const episode = await Episode.findOneAndDelete({ _id: episodeID })
//   if (!episode) {
//     return next(createCustomError(`No episode with id : ${episodeID}`, 404))
//   }
//   res.status(200).json({ episode })
// });

// const createEpisode = asyncWrapper(async (req, res) => {
//   const episode = await Episode.create(req.body)
//   res.status(201).json({ episode })
// });