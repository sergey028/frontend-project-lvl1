import getRandom from '../utils.js';

const isEvenNumber = (num) => ((num % 2 === 0));

function genereateRound() {
  const question = getRandom(1, 100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

  return { question, correctAnswer };
}

export default { rules: 'Answer "yes" if the number is even, otherwise answer "no".', genereateRound }
