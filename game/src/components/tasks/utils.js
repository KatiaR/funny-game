import { scorePlayers } from '../loading/data';
import addMonsterTemplate from '../../screens/monster/monster';


export default function randomInteger(max, min) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function newLifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const currentValueLife = 100;
  scaleLife.style.width = `${currentValueLife}%`;
  return currentValueLife;
}

export function scoring() {
  const scoreTask = 5;
  const maxScore = 25;
  scorePlayers.push(scoreTask);
  const totalScore = scorePlayers.reduce((acc, el) => acc + el);
  if (totalScore % maxScore === 0) {
    const child = document.querySelector('.monster');
    const parent = document.querySelector('.monster-field');
    parent.removeChild(child);
    addMonsterTemplate();
    newLifeDuration();
  }
}

export function allowDrop(e) {
  e.preventDefault();
}

export function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

export function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
}

export function spellType(type) {
  const spellPlayer = document.getElementsByClassName(type)[0];
  spellPlayer.classList.toggle('hidden');
  setTimeout(() => { spellPlayer.classList.toggle('hidden'); }, 1500);
}

export function keyBoardEnter() {
  document.getElementById('client-answer')
    .addEventListener('keyup', (event) => {
      event.preventDefault();
      const keyboardENTER = 13;
      if (event.keyCode === keyboardENTER) {
        document.getElementById('save-changes').click();
      }
    });
}
