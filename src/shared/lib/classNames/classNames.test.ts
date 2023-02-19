import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with add class', () => {
    const expected = 'someClass first second';
    expect(classNames('someClass', {}, ['first', 'second'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass first second arg gor';
    expect(classNames(
      'someClass',
      { arg: true, gor: true, bar: false },
      ['first', 'second'],
    )).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass first second arg gor';
    expect(classNames(
      'someClass',
      { arg: true, gor: true, bar: undefined },
      ['first', 'second'],
    )).toBe(expected);
  });
});
