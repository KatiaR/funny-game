import template from './concepts-template';
import { figures } from '../../loading/data';
import randomInteger, { keyBoardEnter } from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = figures.length - 1;
const min = 0;

export default function writeDifferences() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeWord = document.getElementById('question');
  const currentWordPair = figures[randomInteger(max, min)];
  placeWord.textContent = currentWordPair.question;

  const img = document.getElementById('img');
  img.src = currentWordPair.img;

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.getElementById('client-answer').value.toLowerCase();
    if (currentWordPair.answer.includes(clientAnswer) && clientAnswer) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
  keyBoardEnter();
}
