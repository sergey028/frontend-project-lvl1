#!/usr/bin/env node
import { greeting, brainGcd } from '../src/cli.js';

(async () => {
  const name = (await greeting());

  await brainGcd(name);
})();
