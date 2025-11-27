const calculateOneRepMax = require('./script');

test('calculates 1RM correctly', () => {
  expect(calculateOneRepMax(225, 5)).toBe(263);
});

test('handles single rep correctly', () => {
  expect(calculateOneRepMax(315, 1)).toBe(326);
});

test('handles high reps correctly', () => {
  expect(calculateOneRepMax(135, 12)).toBe(189);
});
