import { getRandom } from './utils.js';
import promptly from 'promptly';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => ((num % 2 === 0));

const numberOfRounds = 3;

const minNumber = 1;

const maxNumber = 100;

function genereateRound() {
    return {
        question = getRandom(minNumber, maxNumber);
      answer = isEven(question) ? 'yes' : 'no';
    }
  }

export async function brainEven(name) {
    
    console.log(rules);

    for (let round = 0; round < numberOfRounds; round += 1) {

        console.log('Question:', question);

        const isEven = isEvenNumber(question);

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

/*
1. utils.js - все функции, которые не отвечают за логику игр (getRandom)
2. Каждую игру в отдельный модуль (src/brain-even.js, src/brain-gcd.js)
3. Выделить двидок игры в отдельный модуль (src/run-game.js)
4. Для каждой из игр написать генератор раунда 
*/


  
  // brain-even.js
  function genereateRound() {
    return {
      answer: , // результат вызова функции isEvenNumber
      question: , // сгенерированное случайное число
    }
  }
  
  export const brainEven = {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    genereateRound
  }
  
  // brain-calc.js
  
  function genereateRound() {
    ...
  }
  
  export const brainCalc = {
    rules: 'Calculate ...',
    genereateRound
  }
  
  // run-game.js
  function runGame() {
    // движок игры знает сколько раундов нужно запускать NUMBER_OF_ROUNDS = 3
    
    // вывести правила конкретной игры
    // запустить определенное количество раундов
    //   вывести вопрос
    //   спросить ответ пользователя
    //   ...
  }
  