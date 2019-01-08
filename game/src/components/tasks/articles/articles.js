import template from './articles-template';
import { articleWords, articleWordsdAnswers } from '../../loading/data';
import randomInteger from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = articleWords.length - 1;
const min = 0;

export default function chooseArticle() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeWord = document.querySelectorAll('.sequence');
  const inputValue = document.querySelectorAll('input[name="answer"]');
  const currentExtraWord = articleWords[randomInteger(max, min)];

  currentExtraWord.forEach((elem, i) => {
    placeWord[i].textContent = elem; // eslint-disable-line no-param-reassign
    inputValue[i].value = elem; // eslint-disable-line no-param-reassign
  });

  // const boxPlaceWord = document.querySelector('.extra-word');
  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    if (articleWordsdAnswers.includes(document.forms[0].elements.answer.value)) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
}
