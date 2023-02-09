const router = require('express').Router();
const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");

router.get('/', (req, res) => {
  console.log(req);

   /* res.send(
      'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
    );
    */
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  router.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
//router.get('/api', (req, res) => {res.json(ReposData));


module.exports = router;