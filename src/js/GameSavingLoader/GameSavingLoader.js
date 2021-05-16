import read from './reader.js';
import json from './parser.js';
import { GameSaving } from './GameSaving.js';

export class GameSavingLoader {

	static load() {
		return new Promise((resolve, reject) => {
			resolve(read()
			.then( result => json(result))
			.then(saving => new GameSaving(JSON.parse(saving)))
			);
		});
	}
}