import template from './extraWord-template';
import { extraWord, extraWordAnswer } from '../../loading/data';
import randomInteger from '../utils';
import './extraWord.scss';

import { lifeDuration } from '../scoreLife/line-score';

const max = 5;
const min = 0;

export default function chooseExtraWord() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeWord = document.querySelectorAll('.sequence');
  const currentExtraWord = extraWord[randomInteger(max, min)];

  [...placeWord].forEach((elem, i) => {
    elem.textContent = currentExtraWord[i]; // eslint-disable-line no-param-reassign
  });

  const boxPlaceWord = document.querySelector('.extra-word');

  boxPlaceWord.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    const btnSave = document.getElementById('save-changes');

    btnSave.addEventListener('click', () => {
      const answerPlayer = e.target.textContent;

      if (extraWordAnswer.includes(answerPlayer)) {
        lifeDuration('progress-bar-monster');
      } else {
        lifeDuration('progress-bar-hero');
      }
    });
  });
}
