// Core Modules


// Outer Modules
const chalk = require("chalk");
const yargs = require("yargs");

// Inner Files
const getNotes = require("./notes.js");

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
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a new note",
  handler: () => {
    console.log("Removing a note...");
  }
});

// Create remove command
yargs.command({
  command: "list",
  describe: "Get all notes",
  handler: () => {
    console.log("Listing the notes...");
  }
});

// Create remove command
yargs.command({
  command: "read",
  describe: "Read note",
  handler: () => {
    console.log("Showing note...!");
  }
});

// console.log(yargs.argv)
yargs.parse();
