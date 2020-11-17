#!/usr/bin/env node
import { greeting, brainProgression } from '../src/cli.js';

(async () => {
    const name = (await greeting());

  await brainProgression(name);
})();