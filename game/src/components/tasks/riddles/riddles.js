import template from './riddles-template';
import { riddles } from '../../loading/data';
import randomInteger from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = riddles.length - 1;
const min = 0;

export default function guessRiddle() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeEnWord = document.getElementById('riddle');
  const currentWordPair = riddles[randomInteger(max, min)];
  placeEnWord.textContent = currentWordPair.question;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value.toLowerCase();
    if (currentWordPair.answer.includes(clientAnswer) && clientAnswer) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
}
