'use strict';

var PrimeNumber = require("../app/primeNumber.js");


describe('primeNumber',function(){

  var primeNumber;

  beforeEach(function(){

  primeNumber = new PrimeNumber

  });

describe("I will return true", function() {
  it("when given 3 as prime number", function() {
    expect(primeNumber.isPrime(3)).toEqual(true)
    });
  it("when given 11 as prime number", function() {
    expect(primeNumber.isPrime(11)).toEqual(true)
    });
  it("when given 13 as prime number", function() {
    expect(primeNumber.isPrime(13)).toEqual(true)
    });
  });
});
