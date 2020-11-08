import { getRandom } from './utils.js';
import promptly from 'promptly';


const isEvenNumber = (num) => ((num % 2 === 0));

const numberOfRounds = 3;

export async function brainEven(name) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let round = 0; round < numberOfRounds; round += 1) {
        const randomNumber = getRandom(1, 100);

        console.log('Question:', randomNumber);

        const isEven = isEvenNumber(randomNumber);

        const correctAnswer = isEven ? 'yes' : 'no';
        const userAnswer = await promptly.prompt('Your answer:');
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'`);
            console.log(`${"Let's try again"}, ${name}!`);

            return;
        }
        console.log('Correct!');
    }

    console.log(`${'Congratulations'}, ${name}!`);
}