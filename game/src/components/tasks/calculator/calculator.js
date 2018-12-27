import template from './calculator-template';
import './calculator.scss';
import randomInteger, { getArithmeticOperator, getArithmeticResult } from './calculator-utils';
import compaireClientResult from '../scoreLife/line-score';


export default function addCalculatorTaskTemplate() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  // madalContentTemplate.textContent = '';
  madalContentTemplate.innerHTML = template;

  const firstNumber = document.getElementsByClassName('first-number')[0];
  const secondNumber = document.getElementsByClassName('second-number')[0];

  const firstNumberTextContent = randomInteger();
  const secondNumberTextContent = randomInteger();

  firstNumber.textContent = firstNumberTextContent;
  secondNumber.textContent = secondNumberTextContent;

  const operator = getArithmeticOperator(firstNumberTextContent, secondNumberTextContent);

  const result = getArithmeticResult(firstNumberTextContent, secondNumberTextContent, operator);

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => compaireClientResult(result));


  // calculatorField.hidden = true;
}
