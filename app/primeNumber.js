function PrimeNumber() {}

PrimeNumber.prototype.isPrime = function(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num !== 1;
};

PrimeNumber.prototype.wordPrime = function(words) {
  self = this;
  return Object.keys(words).map(function(key) {
  return { [key]: words[key], prime: self.isPrime(words[key]) };
  });
}

PrimeNumber.prototype.add = function(a,b) {
  return a + b
}

module.exports = PrimeNumber;
