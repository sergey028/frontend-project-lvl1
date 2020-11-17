#!/usr/bin/env node
import { greeting, brainEven } from '../src/cli.js';

(async () => {
  const name = (await greeting());

  await brainEven(name);
})();
