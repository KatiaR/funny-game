import template from './vocabularyEnToRu-template';
import { vocabularyEnToRu } from '../../loading/data';
import randomInteger from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = vocabularyEnToRu.length - 1;
const min = 0;

export default function translateEnWord() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeEnWord = document.getElementById('en-word');
  const currentWordPair = vocabularyEnToRu[randomInteger(max, min)];
  placeEnWord.textContent = currentWordPair.eng;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value.toLowerCase();
    if (currentWordPair.rus.includes(clientAnswer)) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
}
