const fs = require("fs");
const path = require("path");

function findById(id, notesArray) {
    const result = animalsArray.filter(note => note.id === id)[0];
    return result;
}


function createNewNote(body, notesArray) {
    const note = body;
    // our function's main code will go here!
    notesArray.push(animal);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
    // return finished code to post route for response
    return note;
}

function validateNote(note) {
if (!note.title || typeof note.name !== 'string') {
    return false;
}
if (!animal.text || typeof note.species !== 'string') {
    return false;
}
return true;
}


module.exports = {
    //filterByQuery,
    findById,
    createNewNote,
    validateNote
  };