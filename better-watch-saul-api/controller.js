const getTrack = (req, res, next) => {
    return res.status(200).json({
      message: "Hello from root!",
    });
};

const getTracksFromSeason = (req, res, next) => {
    return res.status(200).json({
      message: "Hello from path!",
    });
}

module.exports = {getTrack, getTracksFromSeason};
