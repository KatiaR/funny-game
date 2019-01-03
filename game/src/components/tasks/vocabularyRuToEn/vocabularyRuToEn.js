import template from './vocabularyRuToEn-template';

import { vocabularyRuToEn } from '../../loading/data';
import randomInteger from '../utils';
import { lifeDuration } from '../scoreLife/line-score';

const max = 5;
const min = 0;

export default function translateRuWord() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeRuWord = document.getElementById('ru-word');
  const currentWordPair = vocabularyRuToEn[randomInteger(max, min)];
  placeRuWord.textContent = currentWordPair.rus;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value.toLowerCase();
    if (currentWordPair.eng.includes(clientAnswer)) {
      lifeDuration('progress-bar-monster');
    } else {
      lifeDuration('progress-bar-hero');
    }
  });
}
