const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just names, given an object of people objects', () => {
    const people = {
      0: { name: 'Harriet', age: 12},
      1: { name: 'Lazarus', age: 999},
      2: { name: 'Bethany', age: 14}
    };
    const result = _.pluck(people, 'name');
    expect(result).toEqual(['Harriet', 'Lazarus', 'Bethany']);
  });

});