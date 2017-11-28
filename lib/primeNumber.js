function PrimeNumber() {}

PrimeNumber.prototype.isPrime = function(number) {
  for (var i = 2; i < number; i++) if (number % i === 0) return false;
  return number !== 1;
};

PrimeNumber.prototype.wordPrime = function(words) {
  self = this;
  return Object.keys(words).map(function(key) {
  return { [key]: words[key], prime: self.isPrime(words[key]) };
  });
}

module.exports = PrimeNumber;
