import promptly from 'promptly';
import greeting from './greeting.js';

const NUMBER_OF_ROUNDS = 3;

export default async function runGame(game) {
  const name = await greeting();

  console.log(game.rule);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const round = game.generateRound();
    console.log('Question:', round.question);

    const userAnswer = await promptly.prompt('Your answer:');

    if (userAnswer !== round.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
