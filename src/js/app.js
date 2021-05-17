import { GameSavingLoader } from './GameSavingLoader/GameSavingLoader';
import { GameSaving } from './GameSavingLoader/GameSaving';

GameSavingLoader.load()
  .then((saving) => new GameSaving(saving), (error) => console.log(error));
