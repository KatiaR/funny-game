import template from './capital-template';
import { capital } from '../../loading/data';
import randomInteger, { scoring } from '../utils';
import { lifeDuration } from '../scoreLife/line-score';

const max = capital.length - 1;
const min = 0;

export default function writeCapital() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeWord = document.getElementById('answer');
  const currentWordPair = capital[randomInteger(max, min)];
  placeWord.textContent = currentWordPair.question;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value.toLowerCase();
    if (currentWordPair.answer.includes(clientAnswer)) {
      lifeDuration('progress-bar-monster');
      scoring();
    } else {
      lifeDuration('progress-bar-hero');
    }
  });
}
