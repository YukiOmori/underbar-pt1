_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every numbers in an array of numbers to their square', () => {
    const obj = {
      1: 'a',
      2: 'b',
      3: 'c',
      4: 'd',
      5: 'e'
    };
    const mappedArr = _.map(obj, (el) => el + el);
    expect(mappedArr).toEqual(['aa', 'bb', 'cc', 'dd', 'ee']);
  });
});