function stringLength(str) {
  if (!str) throw new Error('String must be more than 1 character.');

  if (str.length > 10)
    throw new Error('String must be less than or equal to 10 character.');

  return str.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalize(str) {
  if (typeof str !== 'string') throw new Error(`${str} is not a string`);

  return str[0].toUpperCase() + str.substring(1);
}

function Calculator() {
  this.add = (x, y) => x + y;
  this.subtract = (x, y) => x - y;
  this.divide = (x, y) => x / y;
  this.multiply = (x, y) => x * y;
}

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
};
