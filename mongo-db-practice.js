// MongoDB Exercises
//
// Insert
//
// You will create a MongoDB database and it will have a languages collection containing all the programming languages in the world. Write insert statements to insert these programming languages into it:
//
// Language: Python Inventors: Guido van Rossum First appeared: 1991 Paradigm(s): object-oriented, imperative, functional, procedural, reflective Typing discipline: duck, dynamic, strong, gradual
//
// Language: JavaScript Inventor(s): Brandon Eich First appeared: 1995 Paradigm(s): scripting, object-oriented (prototype-based), imperative, functional, event-driven Typing discipline: dynamic, duck
//
// Language: Java Inventor(s): James Gosling First appeared: 1995 Paradigm(s): Object-oriented (class-based), structured, imperative, generic, reflective, concurrent Typing discipline: discipline Static, strong, safe, nominative, manifest
//
// Language: Haskell Inventor(s): Simon Peyton Jones
//
// Language: Closure Inventor(s): Rich Hickey Paradigm(s): functional Typing discipline: dynamic, strong
//
// Feel free to find other programming languages on Wikipedia and add them to your database.

// Start new mongo database:
mongo my_database
// Create Languages collection:
db.createCollection('languages')



// Find
//
// Find a programming language by its object ID.
// Find all object-oriented programming languages.
// Find all functional programming languages.
// Find all programming languages that have "duck-typing".
// Find all programming languages that have static-typing.
// Find all programming languages with strong-typing.
// Find programming languages that are more that are more than 10 years old.
// Find a programming language by name.
// Find all programming languages invented by Simon Peyton Jones.
// Find all object-oriented programming languages created in the 90s.
// Find all object-oriented programming languages that use duck-typing.
// Find all functional programming languages that are also object-oriented.
// Update
//
// The information for Haskell is missing some data, it should actually be:
//
// Language: Haskell Inventor(s): Lennart Augustsson, Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak, John Hughes, Thomas Johnsson, Mark Jones, Simon Peyton Jones, John Launchbury, Erik Meijer, John Peterson, Alastair Reid, Colin Runciman, Philip Wadler First appeared: 1990 Paradigm(s): functional, imperative, lazy/non-strict, modular Typing discipline: static, strong, inferred
//
// The above data actually had a couple of factual mistakes. Write an update statement with the $set statement to fix them:
//
// Brandon Eich is actually spelled "Brendan Eich".
// The Closure programming language is actually spelled "Clojure".
// Upsert
//
// You want to insert a programming language, but you don't want to accidentally insert a duplicate. Write an update statement with the upsert flag, so that this document will be created if it doesn't already exist, but re-running this statement won't create a duplicate (another with the same name). The programming language is:
//
// Language: Elm Inventor(s): Evan Czaplicki First appeared: 2012 Typing discipline: static, strong, inferred
