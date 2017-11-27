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
  it("when given 67 as prime number", function() {
    expect(primeNumber.isPrime(67)).toEqual(true)
    });
  it("when given 71 as prime number", function() {
    expect(primeNumber.isPrime(71)).toEqual(true)
    });
  it("when given 89 as prime number", function() {
    expect(primeNumber.isPrime(89)).toEqual(true)
    });
  });
describe("I will return false", function() {
  it("when given 4 as prime number", function() {
    expect(primeNumber.isPrime(4)).toEqual(false)
    });
  it("when given 12 as prime number", function() {
    expect(primeNumber.isPrime(12)).toEqual(false)
    });
  it("when given 40 as prime number", function() {
    expect(primeNumber.isPrime(40)).toEqual(false)
    });
  it("when given 70 as prime number", function() {
    expect(primeNumber.isPrime(70)).toEqual(false)
    });
  it("when given 84 as prime number", function() {
    expect(primeNumber.isPrime(84)).toEqual(false)
    });
  it("when given 10- as prime number", function() {
    expect(primeNumber.isPrime(100)).toEqual(false)
  });
 });
});
