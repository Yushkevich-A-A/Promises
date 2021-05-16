
import { GameSavingLoader } from './GameSavingLoader/GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
});

