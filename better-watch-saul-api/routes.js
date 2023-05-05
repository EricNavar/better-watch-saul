const express = require('express');
const router = express.Router();

router.route("/").get((req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

router.route("/path").get((req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

// route.use((req, res, next) => {
//   return res.status(404).json({
//     error: "Not Found",
//   });
// });

module.exports = router

