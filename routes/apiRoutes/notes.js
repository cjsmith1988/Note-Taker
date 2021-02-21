const {  findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');
const router = require('express').Router();

// router.get('/notes', (req, res) => {
//     let results = animals;
//     if (req.query) {
//       results = filterByQuery(req.query, results);
//     }
//     res.json(results);
//   });

  router.get('/notes/:id', (req, res) => {
      const result = findById(req.params.id, notes);
     
      if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
  });

  router.post('/notes', (req, res) => {
      //req.body is where our incoming content will be
      // set id based on what the next indwx of the array will be
      req.body.id = notes.length.toString();
     //console.log(req.body);
     //add animal to json file and animals array in this function
    // if any data in req.body is incorrect, send 400 error back
        if (!validateNote(req.body)) {
            res.status(400).send('The note is not properly formatted.');
        } else {
            const note = createNewNote(req.body, notes);
            res.json(note);
        }
  });

  module.exports  = router;