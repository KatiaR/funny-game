import template from './vocabularyEnToRu-template';

import { vocabularyEnToRu } from '../../loading/data';
import randomInteger from '../utils';
import { lifeDuration } from '../scoreLife/line-score';

const max = 5;
const min = 0;

export default function translateEnWord() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = template;

  const placeEnword = document.getElementById('en-word');
  const currentWordPair = vocabularyEnToRu[randomInteger(max, min)];
  placeEnword.textContent = currentWordPair.eng;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value.toLowerCase();
    if (currentWordPair.rus.includes(clientAnswer)) {
      lifeDuration('progress-bar-monster');
    } else {
      lifeDuration('progress-bar-hero');
    }
  });
}
