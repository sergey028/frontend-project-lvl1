import getRandom from '../utils.js';

const rules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const operation = operations[getRandom(0, operations.length - 1)];

const randomOperation = (number1, operation, number2) => {
 let answer;
  switch (operation) {
    case '+':
    answer = number1 + number2;
      break;

    case '-':
     answer = number1 - number2;
      break;

    case '*':
   answer = number1 * number2; 
      break;

    default:
      break;
  }
  return answer;
};

function genereateRound() {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const question = `${num1} ${operation} ${num2}`;

  const correctAnswer = randomOperation(num1, operation, num2);

  return { question, correctAnswer };
}

export const game = { rules: 'What is the result of the expression?', genereateRound, };
