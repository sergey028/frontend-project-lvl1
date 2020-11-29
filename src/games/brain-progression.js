import getRandom from '../utils.js';

const PROGRESSION_LENGTH = 10;

function acceptProgression() {
  const result = [];

  const start = getRandom(1, 10);
  const step = getRandom(1, 10);

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    result.push(start + (step * i));
  }

  return result;
}

function hideElement(array, index) {
  const result = [...array];
  result[index] = '..';

  return result;
}

function genereateRound() {
  const progression = acceptProgression();
  const index = getRandom(0, PROGRESSION_LENGTH - 1);

  const question = hideElement(progression, index).join(' ');
  const correctAnswer = progression[index];

  return { question, correctAnswer };
}

export default { rules: 'What number is missing in the progression?', genereateRound };
