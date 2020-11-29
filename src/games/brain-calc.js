import getRandom from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

const getOperation = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      return;
  }
};

function genereateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operation = OPERATIONS[getRandom(0, OPERATIONS.length - 1)];

  const question = `${num1} ${operation} ${num2}`;

  const correctAnswer = getOperation(num1, num2, operation);

  return { question, correctAnswer };
}

export default { rules: 'What is the result of the expression?', genereateRound }


