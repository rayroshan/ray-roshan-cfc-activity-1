const calculateRPN = require("./index");

test("calculateRPN(['3','2','+','4','*']) returns 20", () => {
  expect(calculateRPN(['3','2','+','4','*'])).toBe(20)
});

test("calculateRPN(['4','13','5','/','+']) returns 6", () => {
  expect(calculateRPN(['4','13','5','/','+'])).toBe(6)
});

test("calculateRPN(['10','6','9','3','+','-11','*','/','*','17','+','5','+']) returns 22", () => {
  expect(calculateRPN(['10','6','9','3','+','-11','*','/','*','17','+','5','+'])).toBe(22)
});
