<<<<<<< HEAD
var fs = require('fs')
var PrimeNumber = require("../app/primeNumber.js");
var FormatText = require("../app/formatText.js");

function WordCount(filepath, primenumber = new PrimeNumber, formattext = new FormatText){
  this._filepath = filepath || null
  this._primenumber = primenumber
=======
var fs = require("fs");
var PrimeNumber = require("../app/primeNumber.js");
var FormatText = require("../app/formatText.js");

function WordCount(filepath, primenumber = new PrimeNumber(), formattext = new FormatText()) {
  this._filepath = filepath || null;
  this._primenumber = primenumber;
>>>>>>> e3ca7e417ac633d7ac480fc603adc131e2ae186c
  this._formattext = formattext;
}

WordCount.prototype.readfile = function() {
  var self = this;
  if (!self._filepath) {
    throw new Error("File not found");
  }
  this._formattext._data = fs.readFileSync(self._filepath, "utf8");
  return this._formattext._data
};

WordCount.prototype.turnToPrime = function(words) {
  return this._primenumber.wordPrime(words)
};

PrimeNumber.prototype.primeNumber = function(words) {
  self = this;
  return Object.keys(words).map(function(key) {
  return { [key]: words[key], prime: self.this_primenumber(words[key]) };
  });
}

WordCount.prototype.printOutput = function() {
<<<<<<< HEAD
  x = this.countTerms((this.removeEmptyEntries(this.wordSplit(this.removeWords(this.toDowncase(this.readfile()))))))
  return primeNumber(x)
}
=======
  this._formattext.toDowncase()
  this._formattext.deleteWords()
  this._formattext.splitWords()
  this._formattext.filterEntries()
  return this.turnToPrime(this._formattext.countWords())
};
>>>>>>> e3ca7e417ac633d7ac480fc603adc131e2ae186c

module.exports = WordCount;

word = new WordCount('../CTM_Test/spec/TextFiles/fortestingwithtdd.txt')
word.readfile()
console.log(word.printOutput())
