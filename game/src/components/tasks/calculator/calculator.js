import template from './calculator-template';
import './calculator.scss';
import randomInteger, { getArithmeticOperator, getArithmeticResult } from './calculator-utils';
import compaireClientResult from '../scoreLife/line-score';


export default function addCalculatorTaskTemplate() {
  const battleField = document.getElementsByClassName('battle-field')[0];
  battleField.innerHTML += template;

  const firstNumber = document.getElementsByClassName('first-number')[0];
  const secondNumber = document.getElementsByClassName('second-number')[0];

  const firstNumberTextContent = randomInteger();
  const secondNumberTextContent = randomInteger();

  firstNumber.textContent = firstNumberTextContent;
  secondNumber.textContent = secondNumberTextContent;

  getArithmeticOperator();
  const operator = getArithmeticOperator();
  const result = getArithmeticResult(firstNumberTextContent, secondNumberTextContent, operator);
  compaireClientResult(result);
 // calculatorField.hidden = true;
}
