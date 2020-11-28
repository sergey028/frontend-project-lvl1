import getRandom from '../utils.js';
import runGame from '../run-game.js';

const isEvenNumber = (num) => ((num % 2 === 0));

function genereateRound() {
  const question = getRandom(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return { question, correctAnswer };
}

const game = { rules: 'Answer "yes" if the number is even, otherwise answer "no".', genereateRound };

export default () => runGame(game);
