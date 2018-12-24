import template from './calculator-template';
import './calculator.scss';
import randomInteger, { getArithmeticOperator, getArithmeticResult } from './calculator-utils';


export default function addCalculatorTaskTemplate() {
  const calculatorField = document.getElementsByClassName('calculator-field')[0];
  calculatorField.innerHTML += template;

  const firstNumber = document.getElementsByClassName('first-number')[0];
  const secondNumber = document.getElementsByClassName('second-number')[0];

  const firstNumberTextContent = randomInteger();
  const secondNumberTextContent = randomInteger();

  firstNumber.textContent = firstNumberTextContent;
  secondNumber.textContent = secondNumberTextContent;

  getArithmeticOperator();
  const operator = getArithmeticOperator();
  const result = getArithmeticResult(firstNumberTextContent, secondNumberTextContent, operator);

  
}
