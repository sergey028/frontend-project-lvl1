import getRandom from './utils.js';

const rules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const operation = operations[getRandom(0, operations.length - 1)];

function genereateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  let correctAnswer;

  switch (operation) {
    case '+':

      correctAnswer = num1 + num2;
      break;
    case '-':

      correctAnswer = num1 - num2;
      break;
    case '*':

      correctAnswer = num1 * num2;
      break;
  }
  const question = `${num1} ${operation} ${num2}`;

  return { question, correctAnswer };

}

export const game = { rules, genereateRound, };
