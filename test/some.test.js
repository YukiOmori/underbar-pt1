const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number of an array is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number of an array is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any number of an object is odd', () => {
    const nums = {
      0: 2,
      1: 4,
      2: 5,
      3: 6
    };
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number of an object is odd', () => {
    const nums = {
      0: 2,
      1: 4,
      2: 6,
      3: 8
    };
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

});