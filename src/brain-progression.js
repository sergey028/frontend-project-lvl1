import getRandom  from './utils.js';

const index = getRandom(0, 10); 
   
function getProgression() {
  let result = [];
  const progressionStart = getRandom(1, 10);
  const t = getRandom(1, 10);
   const progressionLength = 10;
for (let i = 0; i < progressionLength; i += 1) {
   
  result.push(progressionStart + (t * i)); 
 
}
 return result;
};

function changeElement(array, index) { 
   const result = [...array];
  result[index] = '..';
  return result;
}

export function genereateRound() {
    const question = changeElement(getProgression(), index);
    const correctAnswer = ;
  
    return { question, correctAnswer };
  
  }
  
  export const game = { rules, genereateRound, };