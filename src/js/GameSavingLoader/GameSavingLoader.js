/* eslint-disable no-unused-vars */

import read from './reader';
import json from './parser';
import { GameSaving } from './GameSaving';

export class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      resolve(read()
        .then((result) => json(result))
        .then((saving) => new GameSaving(JSON.parse(saving)))
        .catch((error) => console.log(error)));
    });
  }
}
