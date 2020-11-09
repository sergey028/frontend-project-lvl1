import promptly from 'promptly';
import { greeting } from './greeting.js';
import { getRandom } from './utils.js';

const operations = ['+', '-', '*'];


export async function brainCalc(name) {
  console.log('What is the result of the expression?');

  for (let round = 0; round < numberOfRounds; round += 1) {
    const num1 = getRandom(1, 100);

    const num2 = getRandom(1, 100);

    const operation = operations[getRandom(0, 2)];

    let correctAnswer;

    switch (operation) {
      case '+':
        console.log(`Question: ${num1} + ${num2}`);
        correctAnswer = num1 + num2;
        break;
      case '-':
        console.log(`Question: ${num1} - ${num2}`);
        correctAnswer = num1 - num2;
        break;
      case '*':
        console.log(`Question: ${num1} * ${num2}`);
        correctAnswer = num1 * num2;
        break;
    }
    const userAnswer = await promptly.prompt('Your answer:');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(.'} ${'Correct aswer was'} '${correctAnswer}'`);
      console.log(`${"Let's try again"}, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations'}, ${name}!`);
}