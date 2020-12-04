import getRandom from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

function generateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operation = OPERATIONS[getRandom(0, OPERATIONS.length - 1)];

  const operationValue = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
  };

  const question = `${num1} ${operation} ${num2}`;

  const correctAnswer = String(operationValue[operation]);

  return { question, correctAnswer };
}

export default { rule: 'What is the result of the expression?', generateRound };
