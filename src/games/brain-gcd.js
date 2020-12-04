import getRandom from '../utils.js';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return getGcd(number2, number1 % number2);
};

export function generateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const question = `${num1} ${num2}`;

  const correctAnswer = String(getGcd(num1, num2));

  return { question, correctAnswer };
}

export default { rule: 'Find the greatest common divisor of given numbers.', generateRound };
