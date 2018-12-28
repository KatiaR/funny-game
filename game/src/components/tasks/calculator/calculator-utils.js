const min = 0;
const max = 20;

export default function randomInteger() {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function getArithmeticOperator(firstNumber) {
  let operator = '-';
  if (firstNumber < (2 * max) / 3) {
    operator = '+';
  }
  if (firstNumber < max / 3) {
    operator = '*';
  }
  const arithmeticOperator = document.getElementsByClassName(
    'arithmetic-operator',
  )[0];
  arithmeticOperator.textContent = operator;
  return operator;
}

export function getArithmeticResult(firstNumber, secondNumber, operator) {
  let result;
  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '*') {
    result = firstNumber * secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  }
  return result;
}
