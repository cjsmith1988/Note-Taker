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
      // set id as a universal unique identifier
      req.body.id = uuidv4();
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
   //had to add elseif because the '0' was making the if return false, therefore not being able to delete first item.
    if (result) {
        const newNotes = deleteNote(result, notes);
        res.json(newNotes);
    } else if (result === 0) {
        const newNotes = deleteNote(result, notes);
        res.json(newNotes);
    } else {
      res.send(404);
    }
});



  module.exports  = router;