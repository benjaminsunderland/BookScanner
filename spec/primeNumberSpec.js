var PrimeNumber = require("../lib/primeNumber.js");

"use strict";

describe("primeNumber", function() {
  var primeNumber;

  beforeEach(function() {
    primeNumber = new PrimeNumber();
  });

  describe("I will return true", function() {
    it("when given 3 as prime number", function() {
      expect(primeNumber.isPrime(3)).toEqual(true);
    });
    it("when given 11 as prime number", function() {
      expect(primeNumber.isPrime(11)).toEqual(true);
    });
    it("when given 13 as prime number", function() {
      expect(primeNumber.isPrime(13)).toEqual(true);
    });
  });
  describe("I will return false", function() {
    it("when given 4 as prime number", function() {
      expect(primeNumber.isPrime(4)).toEqual(false);
    });
    it("when given 12 as prime number", function() {
      expect(primeNumber.isPrime(12)).toEqual(false);
    });
    it("when given 40 as prime number", function() {
      expect(primeNumber.isPrime(40)).toEqual(false);
    });
  });
  describe("Words return a result of true or false as prime", function() {
    it("When given a hash of words", function() {
      expect(primeNumber.wordPrime({hello: 1, this:2})).toEqual([{hello: 1, prime: false}, {this: 2, prime: true}])
    });
  });
});
