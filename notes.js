const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json").toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

// Add a note
const addNote = (title, body) => {
  const notes = loadNotes();

  if (notes.find(note => note.title === title)) {
    return console.log(chalk.bgRed(`There's a note with a repeated title`));
  }

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
  console.log(chalk.bgGreen("Note added!"));
};

// Remove a note
const removeNote = title => {
  console.log(`Removing ${title}...`);

  notes = loadNotes();

  if (!notes.find(note => note.title === title)) {
    return console.log(chalk.bgRed("Note with title not found"));
  }

  const updatedNotes = notes.filter(note => note.title !== title);

  saveNotes(updatedNotes);

  console.log(chalk.bgGreen("Note deleted succesfully"));
};

// List notes
const listNotes = () => {
  notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.bgRed("No notes available"));
    return;
  }

  console.log(chalk.bgBlue("Your notes..."));
  notes.forEach(note => {
    console.log(note.title);
  });
};

// Read a note
const readNote = title => {
  const notes = loadNotes();

  const foundNote = notes.find(note => note.title === title);

  if (!foundNote) {
    console.log(chalk.bgRed("No note found"));
    return;
  }
  console.log(foundNote.title);
  console.log(foundNote.body);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
