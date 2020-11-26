import getRandom from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

const operation = OPERATIONS[getRandom(0, OPERATIONS.length - 1)];

const getOperation = (number1, number2, operation) => {
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

  const correctAnswer = getOperation(num1, num2, operation);

  return { question, correctAnswer };
}

export const game = { rules: 'What is the result of the expression?', genereateRound, };
