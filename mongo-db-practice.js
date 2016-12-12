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
db.getCollection('languages').find({ _id: ObjectId("584ed211115080326291f122")})
// Find all object-oriented programming languages.
db.languages.find({ Paradigms:/object-oriented.*/i}).pretty()
// Find all functional programming languages.
db.languages.find({ Paradigms:/functional.*/i}).pretty()
// Find all programming languages that have "duck-typing".
db.languages.find({ typingDiscipline:/duck.*/i}).pretty()
// Find all programming languages that have static-typing.
db.languages.find({ typingDiscipline:/static.*/i}).pretty()
// Find all programming languages with strong-typing.
db.languages.find({ typingDiscipline:/strong.*/i}).pretty()
// Find programming languages that are more that are more than 10 years old.
db.languages.find({ firstAppeared: { $lt: 2006}}).pretty()
// Find a programming language by name.
db.languages.find({ Language:/python/i}).pretty()
// Find all programming languages invented by Simon Peyton Jones.
db.languages.find({ Inventor:/Simon Peyton Jones.*/i}).pretty()
db.languages.find({ Inventor:/Simon.*/i}).pretty()
// Find all object-oriented programming languages created in the 90s.
db.languages.find({
  Paradigms:/object-oriented.*/i,
  $and: [
    {
      firstAppeared: { $gt: 1989 }
    },
    {
      firstAppeared: { $lt: 2000 }
    }
  ]
}).pretty()
// Find all object-oriented programming languages that use duck-typing.
db.languages.find({
  typingDiscipline:/duck.*/i,
  Paradigms:/object-oriented.*/i
}).pretty()
// Find all functional programming languages that are also object-oriented.
db.languages.find({
  $and: [
    {
      Paradigms:/functional.*/i
    },
    {
      Paradigms:/object-oriented.*/i
    }
  ]
}).pretty()


// Update
//
// The information for Haskell is missing some data, it should actually be:
//
// Language: Haskell Inventor(s): Lennart Augustsson, Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak, John Hughes, Thomas Johnsson, Mark Jones, Simon Peyton Jones, John Launchbury, Erik Meijer, John Peterson, Alastair Reid, Colin Runciman, Philip Wadler First appeared: 1990 Paradigm(s): functional, imperative, lazy/non-strict, modular Typing discipline: static, strong, inferred
var haskellUpdate = {
  Inventor: 'Lennart Augustsson, Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak, John Hughes, Thomas Johnsson, Mark Jones, Simon Peyton Jones, John Launchbury, Erik Meijer, John Peterson, Alastair Reid, Colin Runciman, Philip Wadler',
  firstAppeared: 1990,
  Paradigms: 'functional, imperative, lazy/non-strict, modular',
  typingDiscipline: 'static, strong, inferred'
}
db.languages.update({
  Language: 'Haskell',
}, {
  $set: haskellUpdate
}, {
  upsert: true
});


// The above data actually had a couple of factual mistakes. Write an update statement with the $set statement to fix them:
//
// Brandon Eich is actually spelled "Brendan Eich".
var brendanUpdate = {
  Inventor: 'Brendan Eich'
};

db.languages.update({
  Language: 'JavaScript'
}, {
  $set: brendanUpdate
});

db.languages.find({
  Inventor:/Brendan Eich.*/i
}).pretty()
// The Closure programming language is actually spelled "Clojure".
var clojureUpdate = {
  Language: 'Clojure'
};

db.languages.update({
  Language: 'Closure'
}, {
  $set: clojureUpdate
});

db.languages.find({
  Language:/Clojure.*/i
}).pretty()

// Upsert
//
// You want to insert a programming language, but you don't want to accidentally insert a duplicate. Write an update statement with the upsert flag, so that this document will be created if it doesn't already exist, but re-running this statement won't create a duplicate (another with the same name). The programming language is:
//
// Language: Elm Inventor(s): Evan Czaplicki First appeared: 2012 Typing discipline: static, strong, inferred
var elm = {
  Language: 'Elm',
  Inventor: 'Evan Czaplicki',
  firstAppeared: 2012,
  typingDiscipline: 'static, strong, inferred'
};

db.languages.update({
  Language: 'Elm'
}, {
  $set: elm
}, {
  upsert: true
});
