var fs = require('fs')

function WordCount(filepath){
  this._filepath = filepath || null
  this._data;
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

WordCount.prototype.printOutput = function() {
  return this.countTerms((this.removeEmptyEntries(this.wordSplit(this.removeWords(this.toDowncase(this.readfile()))))))
}

module.exports = WordCount;
