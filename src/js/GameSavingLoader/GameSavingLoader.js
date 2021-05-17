/* eslint-disable no-unused-vars */

import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      resolve(read()
        .then((result) => json(result)));
    });
  }
}
