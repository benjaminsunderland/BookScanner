'use strict';

var WordCount = require("../app/wordCount.js");
var fs = require('fs');
require('node-jasmine-file-contents-matcher');
var file = '../CTM_Test/spec/TextFiles/fortestingwithtdd.txt';
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
  it('will throw an error if a file is missing', function() {
    wordCount = new WordCount()
    expect(function() {wordCount.readfile()}).toThrow()
  });

describe("When running the file", function() {
  it('will have the correct output', function() {
    wordCount.readfile()
    expect(wordCount.printOutput()).toEqualFileContents(fileoutput)
    });
  it('will be possible to print the output out with prime numbers', function() {
    expect(wordCount.primeNumber()).toEqualFileContents(fileoutput)
  });
  });
 });
