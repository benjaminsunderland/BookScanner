var fs = require('fs')

function WordCount(filepath){
  this._filepath = filepath || null
  this._words = {}
}

WordCount.prototype.readfileSync = function() {
var self = this;
if (!self._filepath) {
   throw new Error("File not found")
 }
var data = fs.readFileSync(self._filepath, 'utf8')
return true
}

module.exports = WordCount;
