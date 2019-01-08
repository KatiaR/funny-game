import { fruits } from '../../loading/data';
import template from './fruits-template';
import randomInteger, { keyBoardEnter } from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';


const max = fruits.length - 1;
const min = 0;

export default function writeFruit() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const currentWordPair = fruits[randomInteger(max, min)];

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
