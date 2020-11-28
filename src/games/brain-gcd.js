import getRandom from '../utils.js';
import runGame from '../run-game.js';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return getGcd(number2, number1 % number2);
};

export function genereateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const question = `${num1} ${num2}`;

  const correctAnswer = getGcd(num1, num2);

  return { question, correctAnswer };
}

const game = { rules: 'Find the greatest common divisor of given numbers.', genereateRound };

export default () => runGame(game);
