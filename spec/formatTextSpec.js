var FormatText = require("../app/formatText.js");
var filetext = "Hello this is a te$st\nOnce aga_in, th/is is m.y writing for the purpose\nOf tes ting in TDD\n";
var fileoutput = '../CTM_Test/spec/TextFiles/fileoutput.txt';

"use strict";

describe("primeNumber", function() {
  var formatText;

  beforeEach(function() {
    formatText = new FormatText(filetext);
  });

describe("When changing the format of the text file", function() {
  it('will change all the words to lowercase', function() {
      expect(formatText.toDowncase()).toEqual(filetext.toLowerCase())
    });
  it('will remove non-words', function() {
      expect(formatText.deleteWords()).toEqual(filetext.replace(/\W/g, " "))
    });
  it('will split by space, tab and newline', function() {
      expect(formatText.splitWords()).toEqual(filetext.split(/\s+/))
    });
  it('will remove all empty entries', function() {
      formatText.splitWords()
      expect(formatText.filterEntries()).toEqual(filetext.split(/\s+/).filter(v => !!v))
    });
  it('will count all the terms', function() {
      formatText.splitWords()
      expect(formatText.countWords()).toEqualFileContents(fileoutput)
    });
  });
});
