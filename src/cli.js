import promptly from 'promptly';

export default async function greeting() {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`${'Hello'}, ${name}!`);
};
