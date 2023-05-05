const {episodes} = require('./data');

const getTrack = (req, res, next) => {
  const { id: trackId } = req.params;
  const tracks = episodes.filter(episode => episode._id === trackId);
  if (tracks.length == 0) {
    return res
      .status(404)
      .json({ success: false, msg: `no tracks with id ${trackId}` })
  }
  return res.status(200).json(tracks[0]);
};

const getTracksFromSeason = (req, res, next) => {
  const { id: seasonId } = req.params;
  const tracks = episodes.filter(episode => episode.season_number == seasonId);
  if (tracks.length == 0) {
    return res
      .status(404)
      .json({ success: false, msg: `no tracks from season ${seasonId}` })
  }
  return res.status(200).json({ data: tracks });
}

module.exports = {getTrack, getTracksFromSeason};
