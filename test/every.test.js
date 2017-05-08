const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true if all numbers in an object are odd and we test for odd numbers', () => {
      const nums = {
        0: 1,
        1: 3,
        2: 5,
        4: 7
      };
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an object are odd and we test for odd numbers', () => {
      const nums = {
        0: 1,
        1: 3,
        2: 5,
        3: 6,
        4: 7
      };
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

  });
});