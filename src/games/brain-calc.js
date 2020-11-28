import getRandom from '../utils.js';
import runGame from '../run-game.js';

const OPERATIONS = ['+', '-', '*'];

const operation = OPERATIONS[getRandom(0, OPERATIONS.length - 1)];

const getOperation = (number1, number2, expressions) => {
  switch (expressions) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      break;
  }
  return undefined;
};

function genereateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const question = `${num1} ${operation} ${num2}`;

  const correctAnswer = getOperation(num1, num2, operation);

  return { question, correctAnswer };
}

const game = { rules: 'What is the result of the expression?', genereateRound };

export default () => runGame(game);
