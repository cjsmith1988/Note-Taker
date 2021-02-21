const fs = require("fs");
const path = require("path");

function findById(id, notesArray) {
    
    let i = 0;     
    for (i = 0; i < notesArray.length; i++) if(notesArray[i].id === id) break;
    // use i
    const result = notesArray[i]; 
    //console.log(result);
    return i;
}


function createNewNote(body, notesArray) {
    const note = body;
    // our function's main code will go here!
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
    // return finished code to post route for response
    return note;
}

function deleteNote(index, notesArray) {
    notesArray.splice(index,1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
      );
    // return finished code to post route for response
    return notesArray;
}

function validateNote(note) {
if (!note.title || typeof note.title !== 'string') {
    return false;
}
if (!note.text || typeof note.text !== 'string') {
    return false;
}
return true;
}


module.exports = {
    //filterByQuery,
    findById,
    createNewNote,
    deleteNote,
    validateNote
  };