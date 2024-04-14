const Team = require('./team');

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('должен добавлять персонажа в команду', () => {
    const character = { name: 'Character 1' };
    team.add(character);
    expect(team.members.size).toBe(1);
  });

  test('должен выбрасывать ошибку при добавлении существующего персонажа', () => {
    const character = { name: 'Character 1' };
    team.add(character);
    expect(() => team.add(character)).toThrow('Персонаж уже добавлен в команду');
  });

  test('должен добавлять всех персонажей в команду', () => {
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };
    team.addAll(character1, character2);
    expect(team.members.size).toBe(2);
  });

  test('должен выбрасывать ошибку при добавлении существующего персонажа при использовании addAll', () => {
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };
    team.add(character1);
    expect(() => team.addAll(character1, character2)).toThrow('Персонаж уже добавлен в команду');
  });

  test('должен конвертировать Set в массив', () => {
    const character1 = { name: 'Character 1' };
    const character2 = { name: 'Character 2' };
    team.addAll(character1, character2);
    const result = team.toArray();
    expect(result).toEqual([character1, character2]);
  });
});