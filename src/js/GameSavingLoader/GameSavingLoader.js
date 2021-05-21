/* eslint-disable no-unused-vars */

import read from './reader';
import json from './parser';

export class GameSavingLoader {
  static load() {
    return read().then((result) => json(result));
  }
}
