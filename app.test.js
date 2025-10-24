const { add } = require('./app');

test('should add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});