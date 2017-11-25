'use strict';

var WordCount = require("../app/wordCount.js")
var fs = require('fs')
var file = '../CTM_Test/spec/TextFiles/fortestingwithtdd.txt'


describe('wordCount',function(){

  var wordCount;

describe("When trying to read a file", function() {
  it('will not throw an error when reading the file', function() {
    wordCount = new WordCount(file)
    expect(wordCount.readfileSync()).toEqual(true)
  });
  it('will throw an error if a file is missing', function() {
     wordCount = new WordCount()
     expect(function() {wordCount.readfileSync()}).toThrow()
  });
 });
});
