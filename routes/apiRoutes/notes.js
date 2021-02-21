const {  findById, createNewNote, deleteNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    let results = notes;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
    res.json(results);
  });

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
      req.body.id = uuidv4();
     //console.log(req.body);
     //add animal to json file and animals array in this function
    // if any data in req.body is incorrect, send 400 error back
    console.log(req.body);
        if (!validateNote(req.body)) {
            res.status(400).send('The note is not properly formatted.');
        } else {
            const note = createNewNote(req.body, notes);
            res.json(note);
        }
  });
  router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
   
    if (result) {

        const newNotes = deleteNote(result, notes);
        res.json(newNotes);
    } else {
      res.send(404);
    }
});



  module.exports  = router;