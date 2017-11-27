function PrimeNumber(){}

PrimeNumber.prototype.isPrime = function(num) {
  for(var i = 2; i < num; i++)
  if(num % i === 0) return false;
  return num !== 1;
}

module.exports = PrimeNumber;
