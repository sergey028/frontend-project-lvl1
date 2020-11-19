import getRandom from '../utils.js';

export const isEvenNumber = (num) => ((num % 2 === 0));

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export function genereateRound() {
  const question = getRandom(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return { question, correctAnswer };
}

const game = { rules, genereateRound };

export default game;
