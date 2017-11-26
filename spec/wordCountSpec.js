'use strict';

var WordCount = require("../app/wordCount.js")
var fs = require('fs')
var file = '../CTM_Test/spec/TextFiles/fortestingwithtdd.txt'


describe('wordCount',function(){

  var wordCount;

  beforeEach(function(){

  wordCount = new WordCount(file)

  });

describe("When trying to read a file", function() {
  it('will not throw an error when reading the file', function() {
    expect(wordCount.readfileSync()).toEqual(true)
  });
});
describe("When a file isn't available", function() {
  it('will throw an error if a file is missing', function() {
      wordCount = new WordCount()
     expect(function() {wordCount.readfileSync()}).toThrow()
  });
});

describe("When changing the format of the text file", function() {
  it('will change all the words to lowercase', function() {
    expect(wordCount.toDowncase(file)).toEqual(true)
   });
  it('will remove non-words', function() {
    expect(wordCount.removeWords(file)).toEqual(true)
   });
   it('will split by space, tab and newline', function() {
     expect(wordCount.wordSplit(file)).toEqual(true)
   });
  });
 });
