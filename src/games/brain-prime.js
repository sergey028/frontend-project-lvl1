import getRandom from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

function generateRound() {
  const question = getRandom(1, 100);
  const correctAnswer = String(isPrime(question) ? 'yes' : 'no');

  return { question, correctAnswer };
}

export default { rule: 'Answer "yes" if given number is prime. Otherwise answer "no".', generateRound };
