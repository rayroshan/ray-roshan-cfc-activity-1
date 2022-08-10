// Here is the Wikipedia page for Reverse Polish Notation. https://en.wikipedia.org/wiki/Reverse_Polish_notation
// Write a function that will take in an expression written in RPN and produce
// the correct solution using your language of choice.

function calculateRPN(numbers) {
  // We need to go through all the numbers
  // If an array element is a number keep track in a different array
  // If an array element is an operator calculate the last two items in array

  let arr = [],
    first = 0,
    second = 0;

  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case "+":
        arr.push(arr.pop() + arr.pop());
        break;
      case "*":
        arr.push(arr.pop() * arr.pop());
        break;
      case "/":
        second = arr.pop();
        first = arr.pop();
        arr.push((first / second) % 1 > 0.5 ? Math.floor(first / second) : Math.ceil(first / second));
        break;
      case "-":
        second = arr.pop();
        first = arr.pop();
        arr.push(first - second);
        break;
      default:
        !isNaN(numbers[i]) ? arr.push(parseFloat(numbers[i])) : arr.push(0);
    }
  }

  return arr.pop();
}

module.exports = calculateRPN;
