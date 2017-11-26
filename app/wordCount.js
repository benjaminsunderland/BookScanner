var fs = require('fs')

function WordCount(filepath){
  this._filepath = filepath || null
  this._words = {}
  var data;
}

WordCount.prototype.readfileSync = function() {
var self = this;
if (!self._filepath) {
   throw new Error("File not found")
 }
data = fs.readFileSync(self._filepath, 'utf8')
return true
}

WordCount.prototype.toDowncase = function(data) {
  data.toLowerCase()
  return true
}


module.exports = WordCount;
