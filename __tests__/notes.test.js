const fs = require("fs");
const {
    findById,
    createNewNote,
    deleteNote,
    validateNote
} = require("../lib/notes.js");
const { notes } = require("../db/db");

jest.mock('fs');

test("creates a note object", () => {
    const note = createNewNote(
      { title: "Test Title", text: "this is just text", id: "asdf3dgh5rt" },
      notes
    );
  
    expect(note.title).toBe("Test Title");
    expect(note.text).toBe("this is just text");
    expect(note.id).toBe("asdf3dgh5rt");
  });

test("finds index by id", () => {
const startingNotes = [
    {
    id: "asdf234sdfg",
    title: "Pizza",
    text: "how to make a great pizza",
    },
    {
    id: "asdf245adsf",
    title: "Burger",
    text: "what makes a great burger",
    },
];

const result = findById("asdf234sdfg", startingNotes);

expect(result).toBe(0);
});

test("validates note", () => {
const note =  {
    id: "asdf234sdfg",
    title: "Pizza",
    text: "how to make a great pizza",
};

const invalidNote = {
    id: "asdf245adsf",
    title: "Burger",
};

const result = validateNote(note);
const result2 = validateNote(invalidNote);

expect(result).toBe(true);
expect(result2).toBe(false);
});