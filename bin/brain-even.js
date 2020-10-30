#!/usr/bin/env node
import { greeting, brainEven } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

async function triggerGreeting() {
  const name = await greeting();
  await brainEven(name);
}

triggerGreeting();
