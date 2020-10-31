import promptly from 'promptly';

export async function greeting() {
  const name = await promptly.prompt('May I have your name?');
  console.log(`${'Hello'}, ${name}!`);
  return name;
}

function getRandom(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}

const isEvenNumber = (num) => ((num % 2 === 0));

export async function brainEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < 3; round += 1) {
    const randomNumber = getRandom(1, 1000);

    console.log('Question:', randomNumber);

    const isEven = isEvenNumber(randomNumber);

    const correctAnswer = isEven ? 'yes' : 'no';
    const answer = await promptly.prompt('Your answer:');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'`);
      console.log(`${"Let's try again"}, ${name}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`${'Congratulations'}, ${name}!`);
}

const num1 =  getRandom(1, 1000);

const num2 = getRandom(1, 1000);

сonst operation = ['+', '-', '*'];

async function brainCalc(num1, num2, operation) {
  console.log('What is the result of the expression?');

switch (operation) {
case '+' :
  console.log(`${num1} + ${num2}`);
  return ('Correct!');
case '-':
  console.log(`${num1} - ${num2}`);
  return ('Correct!');;
  case '*': 
  console.log(`${num1} * ${num2}`);
  return ('Correct!');
  default: 
  // в default пока не знаю, что написать
    return  console.log(`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'`);
    console.log(`${"Let's try again"}, ${name}!`);
} 
}

