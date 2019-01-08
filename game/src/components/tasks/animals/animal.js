import template from './animal-template';
import { animals } from '../../loading/data';
import randomInteger from '../utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';
import './animal.scss';

const max = animals.length - 1;
const min = 0;

export default function writeAnimal() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const placeWord = document.getElementById('question');
  const currentWordPair = animals[randomInteger(max, min)];
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
}
