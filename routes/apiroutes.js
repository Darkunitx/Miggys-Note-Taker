const router = require('express').Router();
const fs = require("fs");
const path = require("path");

// All of these Routes are prefixed with '/api'
router.get('/notes', (req, res) => {
  //console.log(req);

  // What logic needs to happen here?
  // 1. Read the db.json file
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    // Is there are ERROR?
    if(err) {
      console.log(err);
      throw err;
    }
    // Success - we have data
    console.log(data);
  // 2. Send the data back to the client
    res.json(data);

  /*
    res.send(
      'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
    );
    */
  });
});

router.post('/notes', (req, res) => {
  res.send("POST /api/notes")
});

router.delete('/notes/:id', (req, res) => {
  res.send("DELETE /api/notes/:id")
});

//router.get('/api', (req, res) => res.json(ReposData));

module.exports = router;