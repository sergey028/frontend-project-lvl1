import promptly from 'promptly';

export async function greeting() {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`${'Hello'}, ${name}!`);
};

function getRandom(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
};


const isEvenNumber = (num) => ((num % 2 === 0));
  
  export async function brainEven() {
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

 
    
    for (let i = 0; i < 3; i++) {
      const randomNumber = getRandom(1, 1000);
  
  
      console.log('Question:', randomNumber);
  
  
      const isEven = isEvenNumber(randomNumber);
  
  
      const correctAnswer = isEven ? 'yes' : 'no';
  
      const answer = await promptly.prompt('Your answer:');
  
  
      if (answer !== correctAnswer) {
        console.log(`${answer} ${'is wrong answer ;(.'} ${'Correct answer was'} ${correctAnswer}`);
        console.log(`${"Let's try again"}, ${name}!`);
        return;
      } else {
        console.log('Correct!');
      }
      
    }
    
    console.log(`${'Congratulations'}, ${name}!`);
   
  };
