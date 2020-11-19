import getRandom from '../utils.js';

const rules = 'What is the result of the expression?';

const expressions = ['+', '-', '*'];

const expression = expressions[getRandom(0, expressions.length - 1)];

function genereateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const question = `${num1} ${expression} ${num2}`;

  let correctAnswer;
  switch (expression) {
    case '+':
      correctAnswer = num1 + num2;
      break;

    case '-':
      correctAnswer = num1 - num2;
      break;

    case '*':
      correctAnswer = num1 * num2;
      break;

    default:
      break;
  }

  return { question, correctAnswer };
}

const game = { rules, genereateRound };

export default game;
