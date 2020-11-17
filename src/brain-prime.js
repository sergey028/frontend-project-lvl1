import getRandom from './utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

export function genereateRound() {
    const question = getRandom(1, 100);
    const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';

    return { question, correctAnswer };

}

export const game = { rules, genereateRound, };
