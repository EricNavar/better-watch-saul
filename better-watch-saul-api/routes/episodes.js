const express = require('express');
const router = express.Router();
const {
    getTrack,
    getTracksFromSeason
} = require('../controllers/episodes');

router.route("/:id").get(getTrack);

router.route("/season/:id").get(getTracksFromSeason);

// route.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

module.exports = router

