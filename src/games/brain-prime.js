import getRandom from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export function genereateRound() {
  const question = getRandom(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
}

const game = { rules, genereateRound };

export default game;
