import promptly from 'promptly';

export async function greeting() {
  const name = await promptly.prompt('May I have your name?');
  console.log(`${'Hello'}, ${name}!`);
  return name;
}

function getRandom(min, max) {
  const rand = Math.random() * (max - min) + min;
  return Math.round(rand);
}

const isEvenNumber = (num) => ((num % 2 === 0));
const numberOfRounds = 3;

export async function brainEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < numberOfRounds; round += 1) {
    const randomNumber = getRandom(1, 100);

    console.log('Question:', randomNumber);

    const isEven = isEvenNumber(randomNumber);

    const correctAnswer = isEven ? 'yes' : 'no';
    const userAnswer = await promptly.prompt('Your answer:');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'`);
      console.log(`${"Let's try again"}, ${name}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`${'Congratulations'}, ${name}!`);
}

const operations = ['+', '-', '*'];

export async function brainCalc(name) {
  console.log('What is the result of the expression?');

  for (let round = 0; round < numberOfRounds; round += 1) {
    const num1 = getRandom(1, 100);

    const num2 = getRandom(1, 100);

    const operation = operations[getRandom(0, 2)];

    let correctAnswer;

    switch (operation) {
      case '+':
        console.log(`Question: ${num1} + ${num2}`);
        correctAnswer = num1 + num2;
        break;
      case '-':
        console.log(`Question: ${num1} - ${num2}`);
        correctAnswer = num1 - num2;
        break;
      case '*':
        console.log(`Question: ${num1} * ${num2}`);
        correctAnswer = num1 * num2;
        break;
    }
    const userAnswer = await promptly.prompt('Your answer:');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(.'} ${'Correct aswer was'} '${correctAnswer}'`);
      console.log(`${"Let's try again"}, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations'}, ${name}!`);
}

export async function brainGcd(name) {
  console.log('Find the greatest common divisor of given numbers.');

  for (let round = 0; round < numberOfRounds; round += 1) {
    const num1 = getRandom(1, 100);

    const num2 = getRandom(1, 100);

    const gcd = (number1, number2) => {
      if (number2 === 0) {
        return number1;
      }
      return gcd(number2, number1 % number2);
    };
    
    console.log(`${num1} ${num2}`);

    const correctAnswer = gcd(num1, num2);

    const userAnswer = await promptly.prompt('Your answer:');

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' ${'is wrong answer ;(.'} ${'Correct aswer was'} '${correctAnswer}'`);
      console.log(`${"Let's try again"}, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations'}, ${name}!`);
}
