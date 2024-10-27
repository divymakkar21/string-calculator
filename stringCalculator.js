// stringCalculator.js
function add(numbers) {
  if (!numbers) return 0;

  const numArray = numbers.split(/,|\n/).map(Number);
  // Check for negative numbers
  const negatives = numArray.filter(n => n < 0);
  if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
