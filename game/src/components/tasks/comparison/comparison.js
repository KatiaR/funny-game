import template from './comparison-template';
import './comparison.scss';
import randomInteger, { scoring } from '../utils';
import { lifeDuration } from '../scoreLife/line-score';


const max = 50;
const min = 0;

export default function addCompareTaskTemplate() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const firstNumber = document.getElementsByClassName('first-number')[0];
  const secondNumber = document.getElementsByClassName('second-number')[0];

  const firstNumberTextContent = randomInteger(max, min);
  const secondNumberTextContent = randomInteger(max, min);

  firstNumber.textContent = firstNumberTextContent;
  secondNumber.textContent = secondNumberTextContent;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value;

    if (clientAnswer === '>' && firstNumberTextContent > secondNumberTextContent) {
      lifeDuration('progress-bar-monster');
      scoring();
    } else if (clientAnswer === '<' && firstNumberTextContent < secondNumberTextContent) {
      lifeDuration('progress-bar-monster');
      scoring();
    } else if (clientAnswer === '=' && firstNumberTextContent === secondNumberTextContent) {
      lifeDuration('progress-bar-monster');
      scoring();
    } else {
      lifeDuration('progress-bar-hero');
    }
  });
}
