import template from './exceptions-template';
import { exceptionsImg } from '../../loading/data';
import randomInteger, { keyBoardEnter } from '../utils';
import './exceptions.scss';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';

const max = exceptionsImg.length - 1;
const min = 0;

export default function chooseExceptionsImg() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const currentExceptionsBlock = exceptionsImg[randomInteger(max, min)];

  const placeImg = document.querySelectorAll('.img-exceptions');
  [...placeImg].forEach((elem, i) => { elem.src = currentExceptionsBlock.img[i]; });

  const placeWord = document.getElementById('question');
  placeWord.textContent = currentExceptionsBlock.question;
  let clientAnswer = '';
  const imgBlock = document.getElementById('img');

  imgBlock.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    clientAnswer = e.target.src;
    return clientAnswer;
  });
  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    if (clientAnswer.split('/')[7] === currentExceptionsBlock.answer.split('/')[5]) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
  keyBoardEnter();
}
