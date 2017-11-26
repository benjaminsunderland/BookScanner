'use strict';

var WordCount = require("../app/wordCount.js");
var fs = require('fs');
require('node-jasmine-file-contents-matcher');
var file = '../CTM_Test/spec/TextFiles/fortestingwithtdd.txt';
var filetext = "Hello this is a test\nOnce again, this is my writing for the purpose\nOf testing in TDD\n";
var fileoutput = '../CTM_Test/spec/TextFiles/fileoutput.txt';

describe('wordCount',function(){

  var wordCount;

  beforeEach(function(){

  wordCount = new WordCount(file)

  });

describe("When trying to read a file", function() {
  it('will not throw an error when reading the file', function() {
    expect(wordCount.readfile()).toEqual(filetext)
  });
});
describe("When a file isn't available", function() {
  it('will throw an error if a file is missing', function() {
    wordCount = new WordCount()
    expect(function() {wordCount.readfile()}).toThrow()
  });
});

describe("When changing the format of the text file", function() {
  it('will change all the words to lowercase', function() {
     expect(wordCount.toDowncase(filetext)).toEqual(filetext.toLowerCase())
   });
  it('will remove non-words', function() {
     expect(wordCount.removeWords(filetext)).toEqual(filetext.replace(/\W/g, " "))
   });
  it('will split by space, tab and newline', function() {
     expect(wordCount.wordSplit(filetext)).toEqual(filetext.split(/\s+/))
   });
  it('will remove all empty entries', function() {
     expect(wordCount.removeEmptyEntries(filetext.split(/\s+/))).toEqual(filetext.split(/\s+/).filter(v => !!v))
   });
  it('will count all the terms', function() {
    expect(wordCount.countTerms(filetext.split(/\s+/).filter(v => !!v))).toEqualFileContents(fileoutput)
   });
  it('will have the correct output', function() {
    expect(wordCount.printOutput()).toEqualFileContents(fileoutput)
    });
  });
 });
