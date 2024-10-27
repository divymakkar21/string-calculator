// stringCalculator.test.js
const add = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number for a single number', () => {
    expect(add("1")).toBe(1);
});

test('should return sum for two numbers separated by a comma', () => {
    expect(add("1,5")).toBe(6);
});

test('should handle multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
});

test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test('should throw an error for text', () => {
  expect(() => add("test")).toThrow("Invalid input: test is not a number");
});

test('should list all negative numbers in the error message', () => {
    expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
});
