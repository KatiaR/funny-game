import template from './extraWord-template';
import { extraWord, extraWordAnswer } from '../../loading/data';
import randomInteger, { keyBoardEnter } from '../utils';
import './extraWord.scss';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = extraWord.length - 1;
const min = 0;

export default function chooseExtraWord() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeWord = document.querySelectorAll('.sequence');
  const inputValue = document.querySelectorAll('input[name="answer"]');
  const currentExtraWord = extraWord[randomInteger(max, min)];

  currentExtraWord.forEach((elem, i) => {
    placeWord[i].textContent = elem; // eslint-disable-line no-param-reassign
    inputValue[i].value = elem; // eslint-disable-line no-param-reassign
  });

  // const boxPlaceWord = document.querySelector('.extra-word');
  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    if (extraWordAnswer.includes(document.forms[0].elements.answer.value)) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
  keyBoardEnter();
}
