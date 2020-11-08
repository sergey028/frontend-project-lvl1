import promptly from 'promptly';
import { getRandom } from './utils.js';

export async function brainProgression(name) {
  console.log('What number is missing in the progression?');


  
  for (let round = 0; round < numberOfRounds; round += 1) {
    const num1 = getRandom(1, 100);What number is missing in the progression?

    const num2 = getRandom(1, 100);

    const gcd = (number1, number2) => {
      if (number2 === 0) {
        return number1;
      }
      return gcd(number2, number1 % number2);
    };
    
    console.log(`${num1} ${num2}`);

    const correctAnswer = gcd(num1, num2);

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

