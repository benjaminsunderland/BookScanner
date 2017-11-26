var fs = require('fs')

function WordCount(filepath){
  this._filepath = filepath || null
  this._words = {}
  this._data;
}

WordCount.prototype.readfileSync = function() {
var self = this;
if (!self._filepath) {
   throw new Error("File not found")
 }
 self._data = fs.readFileSync(self._filepath, 'utf8')
 return self._data
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

module.exports = WordCount;
