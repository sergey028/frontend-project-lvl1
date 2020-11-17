#!/usr/bin/env node
import { greeting, brainCalc } from '../src/cli.js';

(async () => {
   const name = (await greeting());

  await brainCalc(name);
})();
