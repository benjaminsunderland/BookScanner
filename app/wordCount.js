var fs = require('fs')
var PrimeNumber = require("../app/primeNumber.js");
var FormatText = require("../app/formatText.js");

function WordCount(filepath, primenumber = new PrimeNumber, formattext = new FormatText){
  this._filepath = filepath || null
  this._primenumber = primenumber
  this._formattext = formattext;
}

WordCount.prototype.readfile = function() {
var self = this;
if (!self._filepath) {
   throw new Error("File not found")
 }
 self._data = fs.readFileSync(self._filepath, 'utf8')
 return self._data
}

WordCount.prototype.testFunction = function() {
  return true
}

WordCount.prototype.toDowncase = function(words) {
  return words.toLowerCase()
}

WordCount.prototype.removeWords = function(words) {
  return words.replace(/\W/g, " ")
}

WordCount.prototype.wordSplit = function(words) {
  return words.split(/\s+/);
}

WordCount.prototype.removeEmptyEntries = function(words) {
  return words.filter(v => !!v)
}

WordCount.prototype.countTerms = function(words) {
  return words.reduce((dict, v) => {dict[v] = v in dict ? dict[v] + 1 : 1; return dict}, {});
}

PrimeNumber.prototype.primeNumber = function(words) {
  self = this;
  return Object.keys(words).map(function(key) {
  return { [key]: words[key], prime: self.this_primenumber(words[key]) };
  });
}

WordCount.prototype.printOutput = function() {
  x = this.countTerms((this.removeEmptyEntries(this.wordSplit(this.removeWords(this.toDowncase(this.readfile()))))))
  return primeNumber(x)
}

module.exports = WordCount;

word = new WordCount('../CTM_Test/spec/TextFiles/fortestingwithtdd.txt')
word.readfile()
console.log(word.printOutput())
