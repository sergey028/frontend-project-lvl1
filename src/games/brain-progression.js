import getRandom from '../utils.js';

const rules = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

function getProgression() {
  const result = [];

  const start = getRandom(1, 10);
  const step = getRandom(1, 10);

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    result.push(start + (step * i));
  }

  return result;
}

function changeElement(array, index) {
  const result = [...array];
  result[index] = '..';

  return result;
}

export function genereateRound() {
  const progression = getProgression();
  const index = getRandom(0, PROGRESSION_LENGTH - 1);

  const question = changeElement(progression, index).join(' ');
  const correctAnswer = progression[index];

  return { question, correctAnswer };
}

const game = { rules, genereateRound };

export default game;
