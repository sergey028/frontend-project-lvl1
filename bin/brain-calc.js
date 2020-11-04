#!/usr/bin/env node
import { greeting, brainCalc } from '../src/cli.js';

(async () => {
  console.log('Welcome to the Brain Games!');

  const name = (await greeting());

  await brainCalc(name);
})();
