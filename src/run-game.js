import promptly from 'promptly';
import greeting from './greeting.js';


const name = (await greeting());

async function runGame() {

    console.log(game.rules);

    const numberOfRounds = 3;

    for (let i = 0; i < numberOfRounds; i += 1) {
        const round = game.genereateRound();

        console.log('Question:', round.question);

        const userAnswer = await promptly.prompt('Your answer:');

        if (userAnswer !== String(round.correctAnswer)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'`);
            console.log(`Let's try again, ${name}!`);

            return;
        }
        console.log('Correct!');
    }

    console.log(`Congratulations, ${name}!`);
}


await runGame(name);