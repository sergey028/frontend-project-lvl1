import getRandom from '../utils.js';

const isEvenNumber = (num) => (num % 2 === 0);

function generateRound() {
  const question = getRandom(1, 100);
  const correctAnswer = String(isEvenNumber(question) ? 'yes' : 'no');

  return { question, correctAnswer };
}

export default { rule: 'Answer "yes" if the number is even, otherwise answer "no".', generateRound };
