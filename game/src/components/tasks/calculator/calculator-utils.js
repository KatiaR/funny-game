const min = 0;
const max = 50;


export default function randomInteger() {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

export function getArithmeticOperator(firstNumber, secondNumber) {
  let operator;
  if (firstNumber > 50) {
    operator = '+';
  } else if (firstNumber < 10 && secondNumber < 10) {
    operator = '*';
  } else {
    operator = '-';
  }
  const arithmeticOperator = document.getElementsByClassName('arithmetic-operator')[0];
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

export function compaireClientResult(result) {
  const inputValue = document.getElementsByClassName('form-control')[0].value;
  if (inputValue === result) {
    const lifeMonster = document.getElementsByClassName('progress-bar-monster')[0];
    const widthMonsterLife = getComputedStyle(lifeMonster).width;
    const reduceLife = 20;
    const currentValueLife = widthMonsterLife - reduceLife;
    lifeMonster.style.width = currentValueLife;
}
