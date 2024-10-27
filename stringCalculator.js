// stringCalculator.js
function add(numbers) {
  if (!numbers) return 0;

  // Split numbers by comma or newline and map them to numbers
  const numArray = numbers.split(/,|\n/).map(item => {
    const parsed = Number(item);
    if (isNaN(parsed)) throw new Error(`Invalid input: ${item} is not a number`);
    return parsed;
});
  // Check for negative numbers
  const negatives = numArray.filter(n => n < 0);
  if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
