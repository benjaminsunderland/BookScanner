function FormatText(data) {
  this._data = data;
}

FormatText.prototype.toDowncase = function() {
  return this._data = this._data.toLowerCase();
};

FormatText.prototype.deleteWords = function() {
  return this._data = this._data.replace(/\W/g, " ");
};

FormatText.prototype.splitWords = function() {
  return this._data = this._data.split(/\s+/);
};

FormatText.prototype.filterEntries = function() {
  return this._data = this._data.filter(v => !!v);
};

FormatText.prototype.countWords = function() {
  return this._data = this._data.reduce((dict, v) => {dict[v] = v in dict ? dict[v] + 1 : 1; return dict}, {});
}

module.exports = FormatText;
