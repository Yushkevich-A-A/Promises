import { GameSavingLoader } from "../GameSavingLoader";
import { GameSaving } from "../GameSaving"

const testObject = {
  id: 9,
  created: 1546300800,
  userInfo: { 
		id: 1, 
		name: 'Hitman', 
		level: 10, 
		points: 2000
	}
}

test('проверка данных возвращенных из промиса', async () => {
	const result = await GameSavingLoader.load();

	expect(result).toEqual(testObject);
});

test('проверка класса возращенного объекта', async () => {
	const result = await GameSavingLoader.load();

	expect(result instanceof GameSaving).toBeTruthy();
});