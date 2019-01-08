import template from './calculator-template';
import './calculator.scss';
import randomInteger, { getArithmeticOperator, getArithmeticResult } from './calculator-utils';
import compareClientResult from '../scoreLife/line-score';
import { keyBoardEnter } from '../utils';

export default function addCalculatorTaskTemplate() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const firstNumber = document.getElementsByClassName('first-number')[0];
  const secondNumber = document.getElementsByClassName('second-number')[0];

  const firstNumberTextContent = randomInteger();
  const secondNumberTextContent = randomInteger();

  firstNumber.textContent = firstNumberTextContent;
  secondNumber.textContent = secondNumberTextContent;

  const operator = getArithmeticOperator(firstNumberTextContent, secondNumberTextContent);

  const result = getArithmeticResult(firstNumberTextContent, secondNumberTextContent, operator);

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => compareClientResult(result));
  keyBoardEnter();
}
