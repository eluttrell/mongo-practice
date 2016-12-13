const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/proglangs');

const Language = mongoose.model('Language', {
  name: String,
  website: String,
  startDate: Date,
  paradigms: [String],
  discipline: [String],
  inventor: [{
    name: String,
    website: String
  }],
  recent: Date,
  influencedBy: [String]
});

var cplusplus = new Language({
  name: 'C++',
  website: 'https://isocpp.org/',
  startDate: new Date('1983-01-01'),
  paradigms: ['procedural', 'functional', 'object-oriented', 'generic'],
  discipline: ['static', 'nominative', 'partially inferred'],
  inventor: [{
    name: 'Bjarne Stroustrup',
    website: 'https://en.wikipedia.org/wiki/Bjarne_Stroustrup'
  }],
  recent: new Date('2014-12-14'),
  influencedBy: ['C', 'Simula', 'ALGOL 68', 'Ada', 'CLU', 'ML']
});

// cplusplus.save((err) => {
//   if (err) {
//     console.log('Failed:', err.message);
//   } else {
//     console.log('Success');
//   }
// });
