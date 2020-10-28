#!/usr/bin/env node

import {greeting, brainEven} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

await greeting();

brainEven();