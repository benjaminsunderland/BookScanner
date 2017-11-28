var fs = require("fs");
var PrimeNumber = require("../app/primeNumber.js");
var FormatText = require("../app/formatText.js");

function WordCount(filepath, primenumber = new PrimeNumber(), formattext = new FormatText()) {
  this._filepath = filepath || null;
  this._primenumber = primenumber;
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

WordCount.prototype.printOutput = function() {
  this._formattext.toDowncase()
  this._formattext.deleteWords()
  this._formattext.splitWords()
  this._formattext.filterEntries()
  return this.turnToPrime(this._formattext.countWords())
};

module.exports = WordCount;

word = new WordCount('../CTM_Test/spec/TextFiles/therailwaychildren.txt')
word.readfile()
console.log(word.printOutput())
