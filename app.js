// Core Modules

// Outer Modules
const chalk = require("chalk");
const yargs = require("yargs");

// Inner Files
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create list notes command
yargs.command({
  command: "list",
  describe: "Get all notes",
  handler() {
    notes.listNotes();
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read note",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// console.log(yargs.argv)
yargs.parse();
