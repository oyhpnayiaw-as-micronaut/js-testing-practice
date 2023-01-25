/* eslint-disable no-undef */
const {
  Calculator,
  stringLength,
  reverseString,
  capitalize,
} = require('./index');

describe('stringLength', () => {
  test('should return number', () => {
    // arrange
    const str = 'hello';

    // act
    const length = stringLength(str);

    // assert
    expect(typeof length).toBe('number');
  });

  test('should throw an error if string is less than 1 or more than 10 characters', () => {
    // arrange
    const str1 = '';
    const str2 = 'hello world';

    // assert
    expect(() => stringLength(str1)).toThrow(/more than/);
    expect(() => stringLength(str2)).toThrow(/less than/);
  });
});

test('reverseString function should return reverse version of the string', () => {
  // arrange
  const str = 'hello';

  // act
  const response = reverseString(str);

  // assert
  expect(response).toEqual('olleh');
});

describe('Calculator', () => {
  const calculator = new Calculator();

  test('should add two value', () => {
    const value = calculator.add(1, 1);

    expect(value).toEqual(2);
  });

  test('should subtract two value', () => {
    const value = calculator.subtract(1, 1);

    expect(value).toEqual(0);
  });

  test('should multiply two value', () => {
    const value = calculator.multiply(2, 2);

    expect(value).toEqual(4);
  });

  test('should divide two value', () => {
    const value = calculator.divide(4, 2);

    expect(value).toEqual(2);
  });
});

describe('capitalize', () => {
  test('should return the capitalize value the argument', () => {
    const capitalizeStr = capitalize('hello');

    expect(capitalizeStr).toEqual('Hello');
  });

  test('should throw error if argument is not a string', () => {
    expect(() => capitalize(10)).toThrow(/not a string/);
  });
});
