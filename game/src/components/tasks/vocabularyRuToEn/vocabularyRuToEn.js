import template from './vocabularyRuToEn-template';
import { vocabularyRuToEn } from '../../loading/data';
import randomInteger, { keyBoardEnter } from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = vocabularyRuToEn.length - 1;
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
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
  keyBoardEnter();
}
