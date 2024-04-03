import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  isTrue,
  reverseString,
} from "../src/js/main";

// Control test to make sure jest is working
test("isTrue", () => {
  const value = isTrue();
  expect(value).toBeTruthy();
});

test("capitalize", () => {
  const value = capitalize("cat");
  expect(value).toBe("Cat");
});

test("reverseString", () => {
  const value = reverseString("cat");
  expect(value).toBe("tac");
});

test("calculator", () => {
  const sum = calculator.sum(2, 3);
  expect(sum).toBe(5);

  const minus = calculator.subtract(5, 2);
  expect(minus).toBe(3);

  const product = calculator.multiply(5, 2);
  expect(product).toBe(10);

  const result = calculator.divide(15, 5);
  expect(result).toBe(3);
});

test("cipher", () => {
  const basic = caesarCipher("james", 1);
  expect(basic).toBe("kbnft");

  const wrap = caesarCipher("zebra", 5);
  expect(wrap).toBe("ejgwf");

  const caseSensitive = caesarCipher("James", 1);
  expect(caseSensitive).toBe("Kbnft");

  const negativeShift = caesarCipher("zebra", -4);
  expect(negativeShift).toBe("vaxnw");

  const nonletters = caesarCipher("Panic!", 2);
  expect(nonletters).toBe("Rcpke!");
});

test("analyzeArray", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(obj).toEqual({
    length: 6,
    average: 4,
    min: 1,
    max: 8,
  });
});
